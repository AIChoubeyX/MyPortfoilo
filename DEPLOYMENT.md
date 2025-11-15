# 🚀 Deployment Guide - MyPortfoilo

## Architecture
- **Frontend**: React + Vite (Vercel)
- **Backend**: Express.js + OpenRouter AI (Render)

---

## Backend Deployment (Render)

### Step 1: Push Code to GitHub
Make sure your code is pushed to GitHub with the `render.yaml` file included.

### Step 2: Create Render Service
1. Go to [render.com](https://render.com)
2. Sign up / Log in
3. Click **"New +"** → **"Web Service"**
4. Select **"Connect a repository"**
5. Choose your **MyPortfoilo** repository

### Step 3: Configure Render Service
Fill in the following settings:
- **Name**: `portfolio-backend`
- **Environment**: `Node`
- **Region**: Choose your region
- **Branch**: `main`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Plan**: Free (or paid if you prefer)

### Step 4: Add Environment Variables
In the **Environment** section, add:

| Key | Value |
|-----|-------|
| `OPENROUTER_API_KEY` | Your OpenRouter API key |
| `FRONTEND_URL` | (You'll get this from Vercel - add after frontend deployment) |
| `NODE_ENV` | `production` |

### Step 5: Deploy
Click **"Create Web Service"** and wait for deployment to complete.

**Copy your backend URL** (e.g., `https://portfolio-backend.onrender.com`) - you'll need this for frontend setup.

---

## Frontend Deployment (Vercel)

### Step 1: Prepare Environment
The `vercel.json` and `.env.production` files are already configured.

### Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign up / Log in
3. Click **"Add New"** → **"Project"**
4. Select **"Import Git Repository"**
5. Choose your **MyPortfoilo** repository

### Step 3: Configure Vercel Project
- **Framework**: Vite
- **Root Directory**: `frontend`
- **Build Command**: `npm run build` ✓ (pre-configured)
- **Output Directory**: `dist` ✓ (pre-configured)

### Step 4: Set Environment Variables
In **Settings** → **Environment Variables**, add:

| Key | Value |
|-----|-------|
| `VITE_BACKEND_URL` | Your Render backend URL from Step 5 above |

Example: `https://portfolio-backend.onrender.com`

### Step 5: Deploy
Click **"Deploy"** and wait for it to complete.

**Copy your frontend URL** (e.g., `https://myportfoilo.vercel.app`) - you'll use this to update backend CORS.

---

## Step 6: Update Backend CORS

Now that you have your frontend URL from Vercel:

1. Go back to Render
2. Open your `portfolio-backend` service
3. Go to **Settings** → **Environment**
4. Update `FRONTEND_URL` with your Vercel URL
5. Click **"Save"** - this will trigger a redeploy

---

## Local Development

### Backend
```bash
cd backend
npm install
npm run dev
```
Server runs on `http://localhost:5000`

### Frontend
```bash
cd frontend
npm install
npm run dev
```
App runs on `http://localhost:5173`

---

## Environment Files Summary

### Backend - `backend/.env`
```env
OPENROUTER_API_KEY=your_key_here
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

### Frontend - `frontend/.env.production`
```env
VITE_BACKEND_URL=https://your-backend.onrender.com
```

---

## API Endpoints

- **Health Check**: `GET https://your-backend.onrender.com/`
- **Chat**: `POST https://your-backend.onrender.com/api/chat`
  - Body: `{ "message": "your question here" }`

---

## Troubleshooting

### CORS Errors
- Make sure `FRONTEND_URL` is set in Render backend
- Check that the URL matches your Vercel deployment exactly

### API Not Responding
- Verify `VITE_BACKEND_URL` is correct in Vercel environment
- Check that Render service is running (check Render dashboard)
- Ensure `OPENROUTER_API_KEY` is valid

### Build Failures
- Check Render logs: Open service → **Logs** tab
- Verify `render.yaml` is in the root of backend folder
- Ensure all npm dependencies are installed locally first

---

## Files Modified for Deployment

✅ `backend/render.yaml` - Render deployment configuration
✅ `backend/.env.example` - Environment variables template
✅ `backend/server.js` - Updated CORS to support production URLs
✅ `frontend/vercel.json` - Vercel deployment configuration
✅ `frontend/.env.production` - Production environment variables
✅ `frontend/src/pages/Assistant.jsx` - Uses environment variable for backend URL

---

## Next Steps

1. ✅ Commit and push all changes to GitHub
2. ✅ Deploy backend on Render
3. ✅ Deploy frontend on Vercel
4. ✅ Update CORS on backend with frontend URL
5. ✅ Test the chat feature on your live site!
