简体中文 | [English](/README.md)

# 🎨 CamArts 占位图生成器

<div align="center">
  <img src="/public/photo.png" alt="CamArts Placeholder" width="600"/>
  <br>
  <br>
</div>

---

## 🎯 项目介绍
这是一个智能的图片分析工具，能够从任意图片中提取主要颜色，生成美观的CSS渐变占位图。特别适用于图片加载前的占位效果，提升用户体验。

**核心功能：**
- 🔍 智能提取图片顶部、中部、底部主要颜色
- 🌈 自动生成CSS渐变背景
- 🎨 智能计算阴影颜色
- 📱 响应式设计预览
- ⚡ 快速生成，自动打开浏览器预览

## 🚀 开发环境

### 系统要求
- **Node.js**: v14.0.0 或更高版本
- **npm**: v6.0.0 或更高版本
- **操作系统**: Windows, macOS, Linux

### 依赖库
- **sharp**: ^0.34.5 - 高性能图片处理库

## 📦 安装方法

```bash
# 克隆项目
git clone https://github.com/hulk-2019/camarts-placeholder.git
cd camarts-placeholder

# 安装依赖
npm install
```

## 🎮 使用方法

### 基本用法
```bash
node generator.js <图片路径>
```

### 示例
```bash
# 使用示例图片
node generator.js photo.png

# 使用自定义图片
node generator.js /path/to/your/image.jpg
```

### 输出结果
- 🎨 自动生成 `preview.html` 预览文件
- 🌐 自动打开浏览器显示对比效果
- 📊 控制台输出颜色分析结果

## 🛠️ 技术原理

### 颜色提取算法
1. **渐变颜色提取**：将图片缩放至 1×3 像素，分别获取顶部、中部、底部平均颜色
2. **阴影颜色计算**：分析图片中最暗的10%像素，计算平均RGB值
3. **亮度计算**：使用标准亮度公式 `0.2126*R + 0.7152*G + 0.0722*B`

### CSS 变量注入
生成的CSS变量可直接用于网页设计：
```css
--color-top: #b68479;
--color-middle: #af8378;
--color-bottom: #b19c98;
--shadow-color: 73, 53, 26;
```

## 📋 文件结构

```
camarts-placeholder/
├── generator.js          # 主程序文件
├── package.json          # 项目配置
├── package-lock.json     # 依赖锁定
├── LICENSE              # MIT 许可证文件
├── .gitignore           # Git 忽略文件
├── README.md            # 项目文档 (英文)
├── README_zh.md         # 项目文档 (中文)
└── public/              # 公共资源目录
    ├── photo.png         # 示例图片
    └── placeholder.png   # 生成的占位图
```

## 🎨 效果展示

<div align="center">
  <img src="/public/photo.png" alt="原始图片" width="360"/>
  <br>
  <em>原始图片</em>
  <br><br>
  <img src="/public/placeholder.png" alt="原始图片" width="360"/>
  <br>
  <em>生成的占位图</em>
</div>

## 🤝 贡献指南

欢迎提交 Issue 和 Pull Request！
- 🐛 报告Bug
- 💡 提出新功能
- 📝 改进文档
- 🎨 优化UI/UX

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 📞 联系方式

- 📧 邮箱: [hongrong2019@gmail.com](hongrong2019@gmail.com)
- 🐙 GitHub: [hulk-2019](https://github.com/hulk-2019)

---

<div align="center">
  <p>⭐ 如果这个项目对你有帮助，请给个 Star！</p>
</div>
