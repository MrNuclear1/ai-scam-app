# AI Scam Awareness Training App

A full-stack application for training users to identify and resist scam attempts through interactive simulations and lessons.

## 🚀 Quick Deploy

### Backend (Railway)
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app)

1. Fork this repository
2. Connect to Railway
3. Deploy from `backend/` directory
4. Set `OPENAI_API_KEY` in Railway environment variables

### Frontend (Netlify)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy)

1. Fork this repository  
2. Connect to Netlify
3. Deploy from `frontend/` directory
4. Set `NEXT_PUBLIC_BACKEND_URL` to your Railway backend URL

## 📁 Project Structure

```
ai-scam-app/
├── frontend/                # Next.js React application
│   ├── src/
│   │   ├── app/            # Next.js 14 app router pages
│   │   ├── components/     # React components
│   │   ├── data/           # Static data files
│   │   └── utils/          # Utility functions
│   ├── package.json
│   ├── netlify.toml        # Netlify deploy config
│   └── README.md
├── backend/                # Express.js API server
│   ├── src/
│   │   ├── data/           # Backend data (personas, etc.)
│   │   └── server.mjs      # Main server file
│   ├── package.json
│   ├── railway.toml        # Railway deploy config
│   └── README.md
├── README.md
└── .gitignore
```

## 🛠️ Local Development

### Prerequisites
- Node.js 18+
- OpenAI API key
- Git

### Backend Setup
```bash
cd backend
npm install
cp env.development .env
# Edit .env and add: OPENAI_API_KEY=sk-your-actual-key
npm run dev
```

### Frontend Setup
```bash
cd frontend
npm install
cp env.development .env.local
# Edit .env.local: NEXT_PUBLIC_BACKEND_URL=http://localhost:3001
npm run dev
```

Visit `http://localhost:3000` to see the app.

## 🌐 Environment Variables

### Backend (Railway)
```env
OPENAI_API_KEY=sk-your-openai-api-key
SCAM_MODEL=gpt-4o-mini
NODE_ENV=production
```

### Frontend (Netlify)
```env
NEXT_PUBLIC_BACKEND_URL=https://your-backend.up.railway.app
```

## 📊 API Endpoints

- `GET /api/health` - Health check
- `POST /api/scam-chat` - Chat with scammer personas  
- `POST /api/scam-eval` - Evaluate user performance

## ✨ Features

- **Interactive Lessons** - Learn scam identification through engaging content
- **AI Simulations** - Practice with AI-powered scammer personas
- **Story Mode** - Immersive scenarios with scoring and badges
- **Red Flags Training** - Learn warning signs of common scams
- **Responsive Design** - Works on desktop, tablet, and mobile

## 🔧 Production Deployment

### Step 1: Deploy Backend to Railway
1. Create Railway account
2. Import from GitHub (select `backend/` directory)
3. Add environment variables:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `SCAM_MODEL`: `gpt-4o-mini` (optional)
4. Deploy and copy the generated URL

### Step 2: Deploy Frontend to Netlify
1. Create Netlify account
2. Import from GitHub (select `frontend/` directory)
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Add environment variable:
   - `NEXT_PUBLIC_BACKEND_URL`: Your Railway backend URL
5. Deploy

### Step 3: Configure CORS
Update backend `src/server.mjs` CORS origins with your Netlify domain:
```javascript
origin: [
  'https://your-app.netlify.app',
  'https://your-custom-domain.com'
]
```

## 🐛 Troubleshooting

### Common Issues

**Backend won't start:**
- Check OPENAI_API_KEY is set in Railway
- Verify API key has sufficient credits

**Frontend can't connect to backend:**
- Check NEXT_PUBLIC_BACKEND_URL is correct
- Verify CORS is configured for your domain

**Build failures:**
- Ensure all dependencies are in package.json
- Check Node.js version compatibility

### Getting Help
- Check individual README files in `frontend/` and `backend/`
- Review Railway and Netlify deployment logs
- Verify environment variables are set correctly

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## 🙏 Acknowledgments

- OpenAI for GPT API
- Next.js team for the amazing framework
- Railway and Netlify for hosting platforms