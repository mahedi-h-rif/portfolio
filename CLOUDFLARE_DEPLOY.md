# Cloudflare Pages Deployment Guide

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign up for Cloudflare
1. Go to https://dash.cloudflare.com
2. Sign up or log in (it's free!)
3. You don't need to add a domain initially

### Step 2: Create a Pages Project
1. In Cloudflare dashboard, click **"Workers & Pages"** in the sidebar
2. Click **"Create application"**
3. Select **"Pages"** tab
4. Click **"Connect to Git"**

### Step 3: Connect Your GitHub Repository
1. Authorize Cloudflare to access your GitHub
2. Select your repository: `mahedi-h-rif/portfolio`
3. Click **"Begin setup"**

### Step 4: Configure Build Settings
Use these settings:

- **Project name**: `portfolio` (or any name you like)
- **Production branch**: `main`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave empty or put `/`)

### Step 5: Environment Variables (Optional)
You can add these if needed:
- `NODE_VERSION`: `18` (Cloudflare uses Node 18 by default)

### Step 6: Deploy!
1. Click **"Save and Deploy"**
2. Wait 2-3 minutes for the build
3. Your site will be live at: `https://portfolio.pages.dev` (or similar)

## 📝 Important Notes

### Base Path
- Cloudflare Pages uses root path (`/`), not `/portfolio/`
- The `vite.config.js` is already configured to use `/` when `VITE_BASE_PATH` is not set
- This means your site will work perfectly on Cloudflare!

### Custom Domain (Optional)
1. Go to your Pages project → **Custom domains**
2. Click **"Set up a custom domain"**
3. Enter your domain (e.g., `mahedihassan.dev`)
4. Follow DNS setup instructions
5. Cloudflare will automatically provision SSL

### Automatic Deployments
- Every push to `main` branch = automatic deployment
- Preview deployments for pull requests
- Instant rollback if needed

## 🔧 Build Configuration

The project is already configured:
- ✅ Build command: `npm run build`
- ✅ Output directory: `dist`
- ✅ Base path: `/` (root)
- ✅ Redirects file for SPA routing

## 🌐 Your Site URLs

After deployment:
- **Production**: `https://portfolio-XXXXX.pages.dev` (Cloudflare assigns this)
- **Preview**: `https://XXXXX.pages.dev` (for PRs)
- **Custom Domain**: `https://yourdomain.com` (if configured)

## 🐛 Troubleshooting

### Build Fails?
1. Check build logs in Cloudflare dashboard
2. Verify Node version (should be 18+)
3. Make sure all dependencies are in `package.json`

### Assets Not Loading?
- Check browser console for 404 errors
- Verify base path is `/` (not `/portfolio/`)
- Clear browser cache

### Site Shows 404?
- Check the `_redirects` file exists in `public/` folder
- It should be copied to `dist/` during build

## 📊 Cloudflare Pages Benefits

- ✅ **Unlimited bandwidth** (best in class!)
- ✅ **Unlimited requests**
- ✅ **Global CDN** (fast worldwide)
- ✅ **Free SSL** certificates
- ✅ **Custom domains** free
- ✅ **Preview deployments**
- ✅ **Instant rollbacks**
- ✅ **Analytics** (optional)

## 🎯 Next Steps

1. Deploy to Cloudflare using the steps above
2. Your site will be live in ~3 minutes
3. Share the URL: `https://portfolio-XXXXX.pages.dev`

Need help? Check Cloudflare's docs: https://developers.cloudflare.com/pages/

