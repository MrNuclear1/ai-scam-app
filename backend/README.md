# Backend - Express API Server

Express.js server with OpenAI integration for scam simulation APIs.

## Local Development

```bash
npm install
cp env.development .env
# Edit .env and add your OpenAI API key
npm run dev
```

## Environment Variables

Required:
- `OPENAI_API_KEY` - Your OpenAI API key (required)
- `SCAM_MODEL` - OpenAI model to use (optional, defaults to gpt-4o-mini)
- `PORT` - Server port (optional, defaults to 3001)

## API Endpoints

- `GET /` - Server status and info
- `GET /api/health` - Health check with system info
- `POST /api/scam-chat` - Chat with AI scammer personas
- `POST /api/scam-eval` - Evaluate chat transcript and get score

## Railway Deployment

### Quick Deploy
1. Fork this repo to your GitHub
2. Connect GitHub repo to Railway
3. Deploy from the `backend/` directory
4. Set environment variables in Railway dashboard:
   - `OPENAI_API_KEY` (required)
   - `SCAM_MODEL` (optional)

### Railway Configuration
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check: `/api/health`
- Directory: `backend/`

### Domain & CORS
After deployment:
1. Copy your Railway app URL (e.g., `https://your-app.up.railway.app`)
2. Update frontend environment variables with this URL
3. Update CORS origins in `src/server.mjs` if needed

## Production Checklist

- ✅ Environment variables set in Railway
- ✅ CORS configured for your frontend domain
- ✅ Health check endpoint working
- ✅ OpenAI API key valid and has credits
- ✅ Frontend points to correct backend URL

## Troubleshooting

**Server won't start:**
- Check OPENAI_API_KEY is set
- Check Railway logs for specific errors

**CORS errors:**
- Add your frontend domain to corsOptions in server.mjs
- Redeploy after making changes

**API errors:**
- Verify OpenAI API key has sufficient credits
- Check Railway logs for detailed error messages