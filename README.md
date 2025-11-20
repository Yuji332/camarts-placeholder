English | [简体中文](/README_zh.md)

# 🎨 CamArts Placeholder Generator

<div align="center">
  <img src="/public/photo.png" alt="CamArts Placeholder" width="600"/>
  <br>
  <br>
</div>

---

## 🎯 Project Description

An intelligent image analysis tool that extracts dominant colors from any image to generate beautiful CSS gradient placeholders. Perfect for placeholder effects before image loading, enhancing user experience.

**Features:**
- 🔍 Smart extraction of top, middle, and bottom dominant colors
- 🌈 Automatic CSS gradient background generation
- 🎨 Intelligent shadow color calculation
- 📱 Responsive design preview
- ⚡ Fast generation with automatic browser preview

## 🚀 Development Environment

### System Requirements
- **Node.js**: v14.0.0 or higher
- **npm**: v6.0.0 or higher
- **Operating System**: Windows, macOS, Linux

### Dependencies
- **sharp**: ^0.34.5 - High-performance image processing library

## 📦 Installation

```bash
# Clone the project
git clone https://github.com/hulk-2019/camarts-placeholder.git
cd camarts-placeholder

# Install dependencies
npm install
```

## 🎮 Usage

### Basic Usage
```bash
node generator.js <image-path>
```

### Examples
```bash
# Using example image
node generator.js photo.png

# Using custom image
node generator.js /path/to/your/image.jpg
```

### Output Results
- 🎨 Automatically generates `preview.html` preview file
- 🌐 Automatically opens browser to show comparison
- 📊 Console output with color analysis results

## 🛠️ Technical Principles

### Color Extraction Algorithm
1. **Gradient Color Extraction**: Scale image to 1×3 pixels to get top, middle, and bottom average colors
2. **Shadow Color Calculation**: Analyze darkest 10% of pixels and calculate average RGB values
3. **Luminance Calculation**: Use standard luminance formula `0.2126*R + 0.7152*G + 0.0722*B`

### CSS Variable Injection
Generated CSS variables can be directly used in web design:
```css
--color-top: #b68479;
--color-middle: #af8378;
--color-bottom: #b19c98;
--shadow-color: 73, 53, 26;
```

## 📋 File Structure

```
camarts-placeholder/
├── generator.js          # Main program file
├── package.json          # Project configuration
├── package-lock.json     # Dependency lock
├── LICENSE              # MIT license file
├── .gitignore           # Git ignore file
├── README.md            # Project documentation (English)
├── README_zh.md         # Project documentation (Chinese)
└── public/              # Public assets directory
    ├── photo.png         # Example image
    └── placeholder.png   # Generated placeholder image
```

## 🎨 Demo

<div align="center">
  <img src="/public/photo.png" alt="Original Image" width="360"/>
  <br>
  <em>Original Image</em>
  <br><br>
  <img src="/public/placeholder.png" alt="原始图片" width="360"/>
  <br>
  <em>Generated Placeholder</em>
</div>

## 🤝 Contributing

Welcome to submit Issues and Pull Requests!
- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Optimize UI/UX

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 📞 Contact

- 📧 Email: [hongrong2019@gmail.com](hongrong2019@gmail.com)
- 🐙 GitHub: [hulk-2019](https://github.com/hulk-2019)

---

<div align="center">
  <p>⭐ If this project helps you, please give it a Star!</p>
</div>
