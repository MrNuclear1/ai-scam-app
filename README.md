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

# Optional: Global Data Persistence (syncs 5-star reviews & site visits across devices)
NEXT_PUBLIC_GITHUB_TOKEN=ghp_your_github_personal_access_token
NEXT_PUBLIC_STORAGE_GIST_ID=your_gist_id_here
```

### 📊 Global Data Persistence Setup (Optional)

To sync 5-star reviews and site visit counts across all devices and deployments:

1. **Create GitHub Personal Access Token:**
   - Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Create new token with `gist` scope only
   - Copy the token (starts with `ghp_`)

2. **Create Storage Gist:**
   - Go to https://gist.github.com/
   - Create a new **SECRET** gist
   - Name: `global-data.json`
   - Content: `{"fiveStarReviews":[],"totalSiteVisits":0,"lastUpdated":"2024-01-01T00:00:00.000Z"}`
   - Save and copy the Gist ID from URL

3. **Add Environment Variables:**
   - In Netlify: Site settings → Environment variables
   - Add `NEXT_PUBLIC_GITHUB_TOKEN` and `NEXT_PUBLIC_STORAGE_GIST_ID`
   - Redeploy the site

**Without these variables:** Data will be stored locally per device only (localStorage)

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