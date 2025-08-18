# Frontend - Next.js React App

Next.js 14 application with React components for scam awareness training.

## Local Development

```bash
npm install
cp env.development .env.local
# Edit .env.local to point to your backend
npm run dev
```

## Environment Variables

Create `.env.local` file:
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
```

For production, set to your Railway backend URL.

## Build & Scripts

- `npm run dev` - Development server (localhost:3000)
- `npm run build` - Production build (static export)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Netlify Deployment

### Quick Deploy
1. Fork this repo to your GitHub
2. Connect GitHub repo to Netlify
3. Deploy from the `frontend/` directory
4. Set environment variables in Netlify dashboard:
   - `NEXT_PUBLIC_BACKEND_URL` (your Railway backend URL)

### Netlify Configuration
- Build Command: `npm run build`
- Publish Directory: `.next`
- Build Directory: `frontend/`

### Domain Setup
After deployment:
1. Copy your Netlify app URL
2. Update backend CORS settings to include this domain
3. Set up custom domain in Netlify (optional)

## Static Export

This app is configured for static export (no server-side features):
- All pages are pre-rendered at build time
- Images are unoptimized for static hosting
- API calls go to external backend

## Production Checklist

- ✅ Environment variables set in Netlify
- ✅ Backend URL pointing to Railway app
- ✅ CORS configured on backend for your domain
- ✅ Build completing successfully
- ✅ All pages accessible and functional

## Features

- Interactive scam awareness lessons
- AI-powered scam simulation chat
- Story mode scenarios with scoring
- Red flags identification training
- Responsive design for all devices

## Troubleshooting

**Build fails:**
- Check all dependencies are in package.json
- Verify Next.js config is correct for static export

**API calls failing:**
- Verify NEXT_PUBLIC_BACKEND_URL is set correctly
- Check backend is running and accessible
- Check CORS settings on backend

**Pages not loading:**
- Verify static export configuration
- Check routing paths are correct