# Custom Domain Setup Guide

This guide will help you set up a custom domain for your GitHub Pages portfolio.

## Step 1: Choose and Register Your Domain

Popular domain suggestions based on your name "Md Mahedi Hassan":
- `mahedihassan.dev` (recommended - modern and professional)
- `mahedihassan.com`
- `mhmahedi.dev`
- `mhmahedi.com`
- `mahedihassan.me`

You can register domains at:
- [Namecheap](https://www.namecheap.com)
- [Google Domains](https://domains.google)
- [Cloudflare](https://www.cloudflare.com/products/registrar)
- [GoDaddy](https://www.godaddy.com)

## Step 2: Update CNAME File

1. Edit the file: `public/CNAME`
2. Replace `mahedihassan.dev` with your actual domain name
3. **Important**: Only include the domain name, no `http://` or `https://`
   - ✅ Correct: `mahedihassan.dev`
   - ✅ Correct: `www.mahedihassan.dev`
   - ❌ Wrong: `https://mahedihassan.dev`
   - ❌ Wrong: `http://mahedihassan.dev`

## Step 3: Configure DNS Settings

After registering your domain, configure DNS records with your domain provider:

### Option A: Apex Domain (e.g., mahedihassan.dev)

Add these A records:
```
Type: A
Name: @
Value: 185.199.108.153
TTL: 3600

Type: A
Name: @
Value: 185.199.109.153
TTL: 3600

Type: A
Name: @
Value: 185.199.110.153
TTL: 3600

Type: A
Name: @
Value: 185.199.111.153
TTL: 3600
```

### Option B: www Subdomain (e.g., www.mahedihassan.dev)

Add a CNAME record:
```
Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
TTL: 3600
```

### Option C: Both Apex and www

Add both the A records (for apex) and CNAME record (for www).

**Note**: GitHub's IP addresses may change. Check the latest IPs at:
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain

## Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Custom domain**, enter your domain (e.g., `mahedihassan.dev`)
4. Check **Enforce HTTPS** (recommended)
5. Click **Save**

## Step 5: Wait for DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- You can check propagation status at: https://www.whatsmydns.net
- GitHub will automatically detect when DNS is configured correctly

## Step 6: Verify SSL Certificate

GitHub automatically provisions SSL certificates via Let's Encrypt:
- This usually happens within 24 hours after DNS is configured
- Make sure "Enforce HTTPS" is enabled in GitHub Pages settings
- Your site will be accessible at `https://yourdomain.com`

## Step 7: Update Base Path (if needed)

If you're using a custom domain, the base path should be `/` (root). The workflow is already configured to handle this automatically.

## Troubleshooting

### Domain not working?
1. Verify DNS records are correct (use `dig` or online DNS checker)
2. Wait 24-48 hours for full propagation
3. Check GitHub Pages settings show your custom domain
4. Verify CNAME file is in the repository

### SSL Certificate issues?
1. Make sure DNS is properly configured
2. Wait up to 24 hours for certificate provisioning
3. Check "Enforce HTTPS" is enabled

### Mixed content warnings?
- Make sure all resources use HTTPS
- Check browser console for specific errors

## Testing Your Setup

After configuration, test with:
```bash
# Check DNS records
dig mahedihassan.dev
nslookup mahedihassan.dev

# Test HTTPS
curl -I https://mahedihassan.dev
```

## Current Configuration

Your CNAME file is set to: `mahedihassan.dev`

To change it, edit `public/CNAME` and commit the change.

