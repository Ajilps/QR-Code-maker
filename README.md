# QR Code Generator

![Netlify](https://img.shields.io/netlify/gregarious-sunburst-dd3af9?style=flat-square)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E)
![QR Code](https://img.shields.io/badge/qrcode-1.5.4-blue?style=flat-square)
![License: Unlicensed](https://img.shields.io/badge/License-Unlicensed-lightgrey.svg)


A modern, responsive web application for generating QR codes from text or URLs. Built with vanilla JavaScript and Vite for fast development and deployment.



## 🚀 Live Demo

Visit the live application: [https://gregarious-sunburst-dd3af9.netlify.app/](https://gregarious-sunburst-dd3af9.netlify.app/)

## ✨ Features

- **QR Code Generation**: Convert any text or URL into a QR code instantly
- **Download as PNG**: Save generated QR codes as high-quality PNG images
- **Copy to Clipboard**: Copy QR codes directly to clipboard for quick sharing
- **Input Validation**: Automatic validation with character limit (up to 2603 characters)
- **Auto-expanding Textarea**: Text input expands dynamically as you type
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, dark-themed interface with smooth animations
- **Error Correction**: Uses Medium error correction level (M) for reliable scanning

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Build Tool**: Vite 7.2.4
- **QR Code Library**: [qrcode](https://www.npmjs.com/package/qrcode) v1.5.4
- **Deployment**: Netlify

## 📦 Installation

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ajilps/QR-Code-maker.git
   cd QR-Code-maker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎮 Usage

1. **Enter Text/URL**: Type or paste your text or URL into the text area
2. **Generate QR Code**: Click the "Create QR code" button
3. **Download**: Click "Download" to save as PNG file
4. **Copy**: Click "Copy" to copy the QR code image to clipboard
5. **Clear**: Use "Clear" button to reset the input field

### Input Validation
- Maximum 2603 characters (QR code capacity limit)
- Empty input validation
<!--- Real-time character count display-->

## 📁 Project Structure

```
Qrcode/
├── src/
│   ├── main.js          # Main application logic
│   ├── style.css        # Base styles
│   └── testStyle.css    # Component-specific styles
├── public/              # Static assets
├── index.html           # Main HTML file
├── package.json         # Project dependencies and scripts

└── README.md           # This file
```

## 🧠 Technical Details

### Key Components

1. **QR Code Generation**
   ```javascript
   QRCode.toCanvas(canvas, inputText.value, { 
     errorCorrectionLevel: "M" 
   }, callback);
   ```

2. **Download Functionality**
   - Converts canvas to data URL
   - Creates temporary download link
   - Triggers download with filename "QRCode.png"

3. **Clipboard Integration**
   - Uses modern Clipboard API
   - Converts canvas to blob
   - Supports image/png format
   - Provides user feedback with success alerts

4. **Auto-expanding Textarea**
   - Dynamically adjusts height based on content
   - Uses scrollHeight for accurate sizing
   - Smooth visual expansion as user types

5. **Input Validation**
   - Trims whitespace
   - Checks for empty input
   - Enforces character limits (2603 max)
   - Provides user feedback through console

### Styling
- **Dark theme** with light mode support via media queries
- **Responsive design** with flexbox and CSS grid
- **Smooth animations** and hover effects
- **Accessible** color contrast and focus states

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally

### Adding Features

1. **Custom QR Code Options**
   - Modify the options object in `QRCode.toCanvas()` to change:
     - Error correction level (L, M, Q, H)
     - Size and margin
     - Color schemes

2. **Additional Export Formats**
   - Add SVG export using `QRCode.toString()`
   - Add PDF export with jsPDF library

3. **QR Code Scanning**
   - Integrate with libraries like `jsQR` for scanning functionality

## 🚀 Deployment

The application is configured for easy deployment to Netlify:

1. **Netlify Deployment**
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on push

2. **Alternative Platforms**
   - **Vercel**: Similar setup to Netlify
   - **GitHub Pages**: Use the `dist` folder as source
   - **AWS S3**: Upload `dist` contents to S3 bucket

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation as needed
- Test changes thoroughly

## 📄 License

This project is currently unlicensed. To add a license:

1. Choose an appropriate license (MIT recommended for open source)
2. Create a `LICENSE` file with the license text
3. Update this section with license information

For quick setup:
```bash
# Add MIT License
curl -o LICENSE https://opensource.org/licenses/MIT
```

## 🙏 Acknowledgments

- [QRCode.js](https://github.com/davidshimjs/qrcodejs) - QR code generation library
- [Vite](https://vitejs.dev/) - Fast build tool and dev server
- [Netlify](https://www.netlify.com/) - Hosting platform

---

**Built with ❤️ using modern web technologies**

*Last updated:20 December 2025*
```
