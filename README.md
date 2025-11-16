# 🚀 MyPortfoilo - AI-Powered Portfolio Website

A modern, full-stack portfolio website built with React, Express.js, and AI integration. Features an interactive chat assistant powered by OpenRouter API.

![Deployment Status](https://img.shields.io/badge/Frontend-Vercel-blue)
![Deployment Status](https://img.shields.io/badge/Backend-Render-brightgreen)
![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-22.16.0-339933?logo=node.js)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Local Development](#local-development)
- [Deployment](#deployment)
  - [Frontend (Vercel)](#frontend-vercel)
  - [Backend (Render)](#backend-render)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## ✨ Features

### Frontend
- **Interactive Chat Assistant** - AI-powered conversational chatbot
- **Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Modern UI Components** - Built with Shadcn/ui and Tailwind CSS
- **Smooth Navigation** - React Router for fast SPA navigation
- **Dark/Light Mode** - Theme switching support
- **Animation Effects** - GSAP and Motion animations for smooth transitions
- **Multiple Pages**:
  - Home - Hero section with introduction
  - About - Detailed background information
  - Experience - Professional journey and skills
  - Projects - Portfolio of completed work
  - Assistant - AI chat interface
  - Contact - Contact information and form
  - Tools - Useful utilities and resources

### Backend
- **AI Chat API** - Multi-model fallback system with OpenRouter
- **CORS Support** - Configured for production deployment
- **Health Check** - Server status monitoring endpoint
- **Error Handling** - Comprehensive error logging and recovery
- **Environment Configuration** - Flexible configuration via environment variables

---

## 🛠 Tech Stack

### Frontend
- **Framework**: React 18.3.1 with Vite
- **Language**: TypeScript / JavaScript
- **Styling**: Tailwind CSS + PostCSS
- **UI Library**: Shadcn/ui + Radix UI
- **Routing**: React Router v6
- **Animations**: GSAP, Motion, Embla Carousel
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Notifications**: Sonner (Toast library)
- **Build Tool**: Vite 5.4.19

### Backend
- **Runtime**: Node.js 22.16.0
- **Framework**: Express.js 4.18.2
- **Language**: JavaScript (ES Modules)
- **AI Integration**: OpenRouter API
- **CORS**: CORS middleware
- **Environment**: dotenv
- **HTTP Client**: node-fetch

### Deployment
- **Frontend**: Vercel (Serverless)
- **Backend**: Render (Cloud Platform)
- **Version Control**: GitHub
- **Database**: N/A (Stateless backend)

---

## 📁 Project Structure

```
MyPortfoilo/
├── frontend/                          # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── MainLayout.jsx    # Main layout wrapper
│   │   │   │   ├── Footer.jsx        # Footer with navigation
│   │   │   │   ├── Sidebar.jsx       # Navigation sidebar
│   │   │   │   ├── MobileNav.jsx     # Mobile navigation
│   │   │   │   ├── SocialLinks.jsx   # Social media links
│   │   │   │   └── TextType.jsx      # Typing animation
│   │   │   ├── home/
│   │   │   │   └── HeroSection.jsx   # Landing hero section
│   │   │   ├── ui/                   # Shadcn/ui components
│   │   │   │   ├── button.jsx
│   │   │   │   ├── card.jsx
│   │   │   │   ├── dialog.jsx
│   │   │   │   ├── tabs.jsx
│   │   │   │   ├── accordion.jsx
│   │   │   │   └── ... (30+ components)
│   │   │   ├── NavLink.jsx           # Custom nav link
│   │   │   └── hooks/
│   │   │       └── use-mobile.jsx
│   │   ├── pages/
│   │   │   ├── Index.jsx             # Home page
│   │   │   ├── About.jsx             # About page
│   │   │   ├── Experience.jsx        # Experience page
│   │   │   ├── Projects.jsx          # Projects portfolio
│   │   │   ├── Assistant.jsx         # AI chat page
│   │   │   ├── Contact.jsx           # Contact page
│   │   │   ├── Tools.jsx             # Tools page
│   │   │   ├── Blogs.jsx             # Blogs page
│   │   │   └── NotFound.jsx          # 404 page
│   │   ├── lib/
│   │   │   └── utils.js              # Utility functions
│   │   ├── hooks/
│   │   │   ├── use-toast.js
│   │   │   └── use-mobile.jsx
│   │   ├── assets/                   # Images and media
│   │   ├── App.jsx                   # Main app with routing
│   │   ├── main.jsx                  # Entry point
│   │   ├── index.css                 # Global styles
│   │   └── App.css                   # App styles
│   ├── public/
│   │   ├── images/                   # Static images
│   │   └── resume/                   # Resume PDF
│   ├── package.json
│   ├── vercel.json                   # Vercel config
│   ├── .env.production               # Production env
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── tsconfig.json
│
├── backend/                           # Express.js backend
│   ├── server.js                     # Main server file
│   ├── systemPrompt.js               # AI system prompt
│   ├── package.json
│   ├── .env                          # Environment variables
│   ├── .env.example                  # Example env file
│   └── render.yaml                   # Render deployment config
│
├── .render/
│   └── build.sh                      # Build script
├── render.yaml                       # Root render config
├── DEPLOYMENT.md                     # Deployment guide
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v22.16.0 or higher
- **npm**: v10+ or yarn/pnpm
- **Git**: For version control
- **OpenRouter API Key**: For AI chat functionality
- **Code Editor**: VS Code or similar

### Installation

#### 1. Clone the Repository

```bash
git clone https://github.com/AIChoubeyX/MyPortfoilo.git
cd MyPortfoilo
```

#### 2. Frontend Setup

```bash
cd frontend
npm install
```

#### 3. Backend Setup

```bash
cd ../backend
npm install
```

### Local Development

#### Start Backend Server

```bash
cd backend

# Development mode (with hot reload)
npm run dev

# Production mode
npm start
```

Backend will run on `http://localhost:5000`

#### Start Frontend Development Server

```bash
cd frontend

# Development mode with Vite
npm run dev
```

Frontend will run on `http://localhost:5173`

#### Build Frontend for Production

```bash
cd frontend
npm run build
```

Output will be in `dist/` directory.

---

## 🌐 Deployment

### Frontend (Vercel)

#### Option 1: Automatic Deployment (Recommended)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework**: Vite
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables:
   - `VITE_BACKEND_URL`: Your backend URL
6. Click "Deploy"

#### Option 2: Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
cd frontend
vercel
```

**Live URL**: https://my-portfoilo-rho.vercel.app

---

### Backend (Render)

#### Setup Steps

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm ci`
   - **Start Command**: `npm start`
   - **Plan**: Free or Paid (Free tier has limitations)
5. Add Environment Variables:
   - `OPENROUTER_API_KEY`: Your OpenRouter API key
   - `FRONTEND_URL`: Your Vercel frontend URL (for CORS)
   - `NODE_ENV`: `production`
6. Click "Create Web Service"

**Live URL**: https://myportfoilo-3.onrender.com

---

## 🔐 Environment Variables

### Frontend (.env.production)

```dotenv
# Backend API URL
VITE_BACKEND_URL=https://myportfoilo-3.onrender.com
```

### Backend (.env)

```dotenv
# OpenRouter API Key (Required for AI chat)
OPENROUTER_API_KEY=sk-or-v1-YOUR_API_KEY_HERE

# Server Configuration
PORT=5000
NODE_ENV=production

# Frontend URL for CORS
FRONTEND_URL=https://my-portfoilo-rho.vercel.app
```

### Getting API Keys

#### OpenRouter API Key
1. Visit [openrouter.ai](https://openrouter.ai)
2. Sign up for an account
3. Go to API Keys section
4. Create a new API key
5. Copy and paste into `.env` file

**Note**: Free tier includes free model access. Check available models at [openrouter.ai/docs](https://openrouter.ai/docs)

---

## 📡 API Documentation

### Base URL
```
https://myportfoilo-3.onrender.com
```

### Endpoints

#### 1. Health Check
Get server status and configuration.

```
GET /
```

**Response**:
```json
{
  "status": "Server running",
  "timestamp": "2025-11-15T19:33:34.592Z",
  "openrouterKey": true,
  "availableModels": [
    "gryphe/mythomax-l2-13b:free",
    "undi95/toppy-m-7b:free",
    "openchat/openchat-3.5:free",
    "mistralai/mistral-7b-instruct:free"
  ]
}
```

#### 2. Chat with AI
Send a message and get an AI response.

```
POST /api/chat
```

**Headers**:
```
Content-Type: application/json
```

**Request Body**:
```json
{
  "message": "Tell me about yourself"
}
```

**Response**:
```json
{
  "reply": "Hey! I'm Ashutosh, a passionate AI developer...",
  "model": "gryphe/mythomax-l2-13b:free"
}
```

**Error Response** (500):
```json
{
  "reply": "All AI models failed to respond. Try again later.",
  "error": "No models available"
}
```

#### 3. Test Endpoint
Test OpenRouter API connectivity.

```
GET /api/test
```

**Response**:
```json
{
  "status": 200,
  "data": {
    "choices": [...],
    "model": "gryphe/mythomax-l2-13b:free"
  }
}
```

---

## ⚙️ Configuration

### Vercel Configuration (vercel.json)

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

### Render Configuration (render.yaml)

```yaml
services:
  - type: web
    name: portfolio-backend
    env: node
    rootDir: backend
    buildCommand: npm ci
    startCommand: npm start
    envVars:
      - key: OPENROUTER_API_KEY
        scope: run
        sync: false
      - key: FRONTEND_URL
        scope: run
        sync: false
      - key: NODE_ENV
        value: production
```

### Tailwind Configuration

- Located in `frontend/tailwind.config.js`
- Includes custom colors, spacing, and animations
- Integrates with Shadcn/ui components

### Vite Configuration

- Located in `frontend/vite.config.js`
- Uses React SWC plugin for faster builds
- Configured for optimal production builds

---

## 🔄 CORS Configuration

The backend is configured to accept requests from:
- `http://localhost:3000` (Local development)
- `http://localhost:5173` (Local Vite dev)
- `http://localhost:8080` (Alternative local)
- `https://my-portfoilo-rho.vercel.app` (Production frontend)

To add more origins, update the `allowedOrigins` array in `backend/server.js`:

```javascript
const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5173",
  "http://localhost:8080",
  "https://my-portfoilo-rho.vercel.app",
  // Add more URLs here
];
```

---

## 🤖 AI Models

Available OpenRouter models:
- **gryphe/mythomax-l2-13b:free** - High-quality responses
- **undi95/toppy-m-7b:free** - Fast and efficient
- **openchat/openchat-3.5:free** - Conversational
- **mistralai/mistral-7b-instruct:free** - Reliable fallback

The system automatically tries each model in order and uses the first available one.

---

## 📊 Performance Optimizations

### Frontend
- ✅ Code splitting with Vite
- ✅ Image optimization
- ✅ Lazy loading for routes
- ✅ CSS-in-JS optimization
- ✅ Tree shaking for unused code

### Backend
- ✅ Connection pooling
- ✅ Response compression
- ✅ Error handling and recovery
- ✅ Model fallback system
- ✅ Logging for debugging

---

## 🐛 Troubleshooting

### Frontend Issues

**Issue**: Chat not connecting to backend
- **Solution**: Check `VITE_BACKEND_URL` in Vercel environment variables
- **Verify**: Make sure the backend is running on Render

**Issue**: Navigation buttons not working
- **Solution**: Ensure React Router is properly configured in `App.jsx`
- **Check**: Buttons should use `useNavigate()` hook

**Issue**: Styles not loading
- **Solution**: Clear browser cache and rebuild: `npm run build`

### Backend Issues

**Issue**: OpenRouter API errors
- **Solution**: Verify your API key is valid and has credits
- **Check**: Visit `/api/test` endpoint to diagnose

**Issue**: CORS errors
- **Solution**: Ensure `FRONTEND_URL` is set in Render environment
- **Update**: Redeploy backend after updating CORS settings

**Issue**: Server won't start
- **Solution**: Check port 5000 isn't already in use
- **Alternative**: Change PORT in `.env` file

---

## 📝 System Prompt

The AI assistant uses a detailed system prompt that makes it act as Ashutosh. The prompt includes:
- Personal background and education
- Skills and technical expertise
- Project portfolio
- Personal interests and preferences
- Response guidelines and tone

Located in: `backend/systemPrompt.js`

---

## 🚀 Future Enhancements

- [ ] Database integration for storing conversations
- [ ] User authentication system
- [ ] Email notifications
- [ ] Blog CMS integration
- [ ] Portfolio analytics dashboard
- [ ] Multiple language support
- [ ] Advanced caching strategies
- [ ] WebSocket for real-time chat
- [ ] Video testimonials section
- [ ] Project case studies

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 👨‍💻 Author

**Ashutosh Choubey**
- 🎓 B.Tech, AI & ML | Narula Institute of Technology
- 💼 Full-stack AI/Web Developer
- 🌐 Website: https://my-portfoilo-rho.vercel.app
- 𝕏 Twitter: [@choubeyjii_1](https://x.com/choubeyjii_1)
- 📧 Email: ashutoshchoubey2004@gmail.com
- 💻 GitHub: [@AIChoubeyX](https://github.com/AIChoubeyX)

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Vercel](https://vercel.com) - Frontend hosting
- [Render](https://render.com) - Backend hosting
- [OpenRouter](https://openrouter.ai) - AI API
- [Shadcn/ui](https://shadcn.com) - UI components
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [React](https://react.dev) - Frontend framework
- [Express.js](https://expressjs.com) - Backend framework

---

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Troubleshooting](#troubleshooting) section
2. Visit the [API Documentation](#api-documentation)
3. Review deployment guides in `DEPLOYMENT.md`
4. Open an issue on GitHub
5. Contact via email or X

---

**Last Updated**: November 16, 2025  
**Status**: ✅ Production Ready

