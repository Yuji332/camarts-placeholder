const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// 获取命令行输入的图片路径
const imagePath = process.argv[2];

if (!imagePath) {
    console.error('❌ 请在命令后附带图片路径，例如: node generator.js myphoto.jpg');
    process.exit(1);
}

// 辅助函数：RGB 转 Hex
const toHex = (r, g, b) => '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}).join('');

// 辅助函数：计算亮度
const getLuminance = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

async function analyzeImage(filePath) {
    try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        // 1. 提取渐变色 (Top, Middle, Bottom)
        // 技巧：强制将图片缩放为 1px 宽，3px 高。
        // 第1个像素是上部平均色，第2个是中部，第3个是下部。
        const { data: gradientData } = await image
            .clone()
            .resize(1, 3, { fit: 'fill' })
            .ensureAlpha() // 确保有4个通道 (RGBA)
            .raw()
            .toBuffer({ resolveWithObject: true });

        // gradientData 是 Uint8Array [R, G, B, A, R, G, B, A, ...]
        const colors = [];
        for (let i = 0; i < 3; i++) {
            const offset = i * 4;
            colors.push(toHex(gradientData[offset], gradientData[offset + 1], gradientData[offset + 2]));
        }

        // 2. 提取阴影色 (Shadow Color)
        // 技巧：缩小图片，找出亮度最低的 5% 像素的平均值。
        // 注意：CSS中使用 rgba(var(--shadow-color), .3)，所以这里需要输出 "R, G, B" 格式，而不是 Hex。
        const { data: shadowData, info: shadowInfo } = await image
            .clone()
            .resize(50, 50, { fit: 'cover' }) // 缩小以提高性能
            .ensureAlpha()
            .raw()
            .toBuffer({ resolveWithObject: true });

        let pixels = [];
        for (let i = 0; i < shadowData.length; i += 4) {
            const r = shadowData[i];
            const g = shadowData[i + 1];
            const b = shadowData[i + 2];
            pixels.push({ r, g, b, lum: getLuminance(r, g, b) });
        }

        // 按亮度排序，取最暗的前 10%
        pixels.sort((a, b) => a.lum - b.lum);
        const sampleSize = Math.max(1, Math.floor(pixels.length * 0.1));
        
        let rSum = 0, gSum = 0, bSum = 0;
        for (let i = 0; i < sampleSize; i++) {
            rSum += pixels[i].r;
            gSum += pixels[i].g;
            bSum += pixels[i].b;
        }

        const shadowR = Math.round(rSum / sampleSize);
        const shadowG = Math.round(gSum / sampleSize);
        const shadowB = Math.round(bSum / sampleSize);
        const shadowColorRgb = `${shadowR}, ${shadowG}, ${shadowB}`; // 输出格式: "30, 40, 50"

        return {
            width: metadata.width,
            height: metadata.height,
            colorTop: colors[0],
            colorMiddle: colors[1],
            colorBottom: colors[2],
            shadowColor: shadowColorRgb 
        };

    } catch (error) {
        console.error("❌ 图片处理失败:", error);
        process.exit(1);
    }
}

async function generateHtml(filePath) {
    console.log(`🎨 正在分析图片: ${filePath} ...`);
    const data = await analyzeImage(filePath);
    
    console.log('📊 分析结果:', data);

    const htmlContent = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CamArts 占位图效果预览</title>
    <style>
        body {
            background-color: #f0f2f5;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }

        .comparison {
            display: flex;
            gap: 40px;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
        }

        .label {
            margin-bottom: 10px;
            font-weight: bold;
            color: #333;
            text-align: center;
        }

        /* 核心样式：生成的占位符 */
        .camarts-placeholder {
            width: 300px; /* 固定显示宽度，高度自动计算 */
            height: calc(300px * ${data.height} / ${data.width});
            border-radius: 12px;
            
            /* 注入提取到的颜色变量 */
            --color-top: ${data.colorTop};
            --color-middle: ${data.colorMiddle};
            --color-bottom: ${data.colorBottom};
            --shadow-color: ${data.shadowColor}; 
            
            /* 这一块完全复制你的需求CSS */
            -webkit-box-shadow: 0 16px 60px 0 rgba(var(--shadow-color),.3),0 6px 12px 0 rgba(0,0,0,.1);
            box-shadow: 0 16px 60px 0 rgba(var(--shadow-color),.3),0 6px 12px 0 rgba(0,0,0,.1);
            overflow-y: hidden;
            background-image: -webkit-gradient(linear,left top,left bottom,from(var(--color-top)),color-stop(50%,var(--color-middle)),to(var(--color-bottom)));
            background-image: linear-gradient(180deg,var(--color-top) 0,var(--color-middle) 50%,var(--color-bottom));
            background-size: cover;
            
            /* 额外动画效果让它看起来更像加载中 */
            position: relative;
        }

        /* 原始图片用于对比 */
        .original-image {
            width: 300px;
            height: auto;
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
    </style>
</head>
<body>
    <h1>CamArts 占位图提取器</h1>
    <div class="comparison">
        <div>
            <div class="label">生成的占位图 (CSS)</div>
            <!-- 这里就是纯 DIV，没有任何 img 标签 -->
            <div class="camarts-placeholder"></div>
        </div>
        
        <div>
            <div class="label">原始图片</div>
            <!-- 使用绝对路径展示原图 -->
            <img src="${path.resolve(filePath)}" class="original-image" />
        </div>
    </div>
    
    <div style="margin-top: 30px; background: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
        <code>
            style="<br>
            &nbsp;&nbsp;--color-top: <strong>${data.colorTop}</strong>;<br>
            &nbsp;&nbsp;--color-middle: <strong>${data.colorMiddle}</strong>;<br>
            &nbsp;&nbsp;--color-bottom: <strong>${data.colorBottom}</strong>;<br>
            &nbsp;&nbsp;--shadow-color: <strong>${data.shadowColor}</strong>;<br>
            "
        </code>
    </div>
</body>
</html>
    `;

    const outputPath = path.join(__dirname, 'preview.html');
    fs.writeFileSync(outputPath, htmlContent);
    console.log(`✅ 成功生成预览文件: ${outputPath}`);
    
    // 尝试自动打开浏览器
    const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
    exec(start + ' ' + outputPath);
}

generateHtml(imagePath);