# Deployment Instructions

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it `portfolio` (or any name you prefer)
5. Make it **Public** (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

Or if you prefer SSH:

```bash
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** in the left sidebar
4. Under **Source**, select:
   - **Deploy from a branch**: `gh-pages` or `main`
   - **Branch**: `main` (or `gh-pages` if using that branch)
   - **Folder**: `/ (root)`
5. Click **Save**

## Step 4: Enable GitHub Actions

The GitHub Actions workflow will automatically deploy your site when you push to main:

1. Go to **Actions** tab in your repository
2. The workflow should run automatically after you push
3. Wait for it to complete (usually 2-3 minutes)
4. Once complete, your site will be live at:
   `https://YOUR_USERNAME.github.io/portfolio/`

## Alternative: Manual Deployment

If you prefer to deploy manually:

```bash
# Build the project
npm run build

# Install gh-pages
npm install --save-dev gh-pages

# Add deploy script to package.json (already done if using workflow)
# Then deploy:
npm run deploy
```

## Troubleshooting

- If the site shows a 404, wait a few minutes for GitHub Pages to propagate
- Make sure the repository is **Public** (free accounts require public repos for Pages)
- Check the Actions tab to see if the deployment workflow completed successfully
- The base path in `vite.config.js` should match your repository name

