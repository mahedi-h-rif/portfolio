# Troubleshooting GitHub Pages Deployment

## Issue: Can't See Pages After Deployment

### Common Causes and Solutions

#### 1. **Base Path Mismatch**
**Problem**: Assets (JS, CSS) are not loading because paths don't match the deployment URL.

**Solution**: 
- For GitHub Pages subdomain (`username.github.io/repo/`): Base path should be `/repo/`
- For custom domain: Base path should be `/`

**Check**: Open browser DevTools (F12) → Network tab → Look for 404 errors on assets

#### 2. **Custom Domain Not Fully Configured**
**Problem**: CNAME file exists but DNS isn't configured, causing redirects.

**Solution**:
- Option A: Remove CNAME file temporarily if not using custom domain yet
- Option B: Complete DNS configuration (see CUSTOM_DOMAIN_SETUP.md)
- Option C: Update workflow to use `/portfolio/` base path until domain is ready

#### 3. **GitHub Pages Not Enabled**
**Problem**: Repository settings don't have Pages enabled.

**Solution**:
1. Go to repository → Settings → Pages
2. Source: Deploy from a branch → Select `main` branch
3. Or: GitHub Actions (if using workflow)

#### 4. **Deployment Failed**
**Problem**: GitHub Actions workflow failed.

**Solution**:
1. Go to repository → Actions tab
2. Check the latest workflow run
3. Look for error messages
4. Common issues:
   - Build errors (check logs)
   - Permission issues (check workflow permissions)
   - Node version mismatch

#### 5. **Cache Issues**
**Problem**: Browser showing old cached version.

**Solution**:
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Try incognito/private mode

## Quick Diagnostic Steps

1. **Check if site is deployed**:
   ```bash
   curl -I https://mahedi-h-rif.github.io/portfolio/
   ```

2. **Check GitHub Actions**:
   - Go to: https://github.com/mahedi-h-rif/portfolio/actions
   - Verify latest deployment succeeded

3. **Check browser console**:
   - Open DevTools (F12)
   - Look for errors in Console tab
   - Check Network tab for failed requests

4. **Verify base path in built files**:
   ```bash
   cat dist/index.html | grep "src="
   ```
   - Should show `/portfolio/assets/...` for GitHub Pages
   - Should show `/assets/...` for custom domain

## Current Configuration

- **Repository**: portfolio
- **GitHub Pages URL**: https://mahedi-h-rif.github.io/portfolio/
- **Base Path**: `/portfolio/`
- **CNAME**: mahedihassan.dev (configured but may not be active)

## Fix Applied

The workflow now:
1. Checks for CNAME file
2. Uses `/portfolio/` base path for GitHub Pages subdomain
3. Can be updated to use `/` when custom domain is fully configured

## Next Steps

1. **If using GitHub Pages subdomain** (current):
   - Keep base path as `/portfolio/`
   - Site should work at: https://mahedi-h-rif.github.io/portfolio/

2. **If using custom domain**:
   - Complete DNS configuration
   - Update workflow to use base path `/`
   - Remove or update CNAME file

3. **Test locally**:
   ```bash
   npm run build
   npm run preview
   ```
   Visit the preview URL and check if everything loads correctly.

