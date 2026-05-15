# Deployment Guide for Raven Adversary (GitHub Pages)

This guide shows you how to host Raven Adversary on GitHub Pages using your custom domain **ravenadversary.com**.

## Prerequisites

Since you used AI Studio's "Export to GitHub" feature, your repository is already created at **https://github.com/M3taman/Raven-Adversary**. 

You do **not** need to run `git init` or `git remote add origin` again (which is why you received the "remote origin already exists" error).

To deploy from your local machine, do the following:

1. Open your terminal and clone your existing repository:
   ```bash
   git clone https://github.com/M3taman/Raven-Adversary.git
   cd Raven-Adversary
   ```
   *(If you already have the code locally and simply want to bypass the error, you can just run `git push -u origin main` instead).*

## Deploying to GitHub Pages

We have already configured everything needed to automate the deployment process, including the `CNAME` file for your custom domain `ravenadversary.com`.

1. Install the dependencies:
   ```bash
   npm install
   ```
2. Run the automated deploy script:
   ```bash
   npm run deploy
   ```

This command will automatically build the application and push the compiled files to a `gh-pages` branch in your GitHub repository.

## Configuring Custom Domain (GitHub Settings)

1. Go to your repository on GitHub.
2. Click on **Settings** > **Pages** (on the left sidebar).
3. Under **Source**, select `Deploy from a branch`.
4. Under **Branch**, select the `gh-pages` branch and `/ (root)` folder, then click **Save**.
5. Under **Custom domain**, type `ravenadversary.com` and click **Save**. (GitHub will read the CNAME we already included, however doing this forces GitHub to provision the SSL certificate).
6. Ensure **Enforce HTTPS** is checked.

## DNS Configuration (Your Domain Registrar)

Go to your domain registrar (e.g., Namecheap, GoDaddy, Cloudflare) and set up the following DNS records for `ravenadversary.com`:

**A Records:**
- Host: `@` | Value: `185.199.108.153`
- Host: `@` | Value: `185.199.109.153`
- Host: `@` | Value: `185.199.110.153`
- Host: `@` | Value: `185.199.111.153`

**CNAME Record:**
- Host: `www` | Value: `your-username.github.io` (Replace `your-username` with your GitHub username)

Once the DNS propagates (usually takes 15-30 minutes, up to 24 hours), your website will be live at **https://ravenadversary.com**.

## Troubleshooting: "Enforce HTTPS — Unavailable"

If you see the error **"Enforce HTTPS — Unavailable for your site because your domain is not properly configured to support HTTPS"**, this is completely normal when you first set up a new domain on GitHub Pages. It happens because GitHub is waiting for your DNS records to fully propagate before it generates your SSL certificate.

**How to fix it:**
1. **Wait 15-30 minutes.** DNS propagation takes a little bit of time.
2. Ensure your DNS records at your registrar EXACTLY match the ones listed above (the four `185.199...` IPs for `@` and the CNAME `M3taman.github.io` for `www`).
3. After waiting, go back to GitHub **Settings > Pages**.
4. **Remove** `ravenadversary.com` from the Custom domain box and click **Save**.
5. Wait 60 seconds, then **re-enter** `ravenadversary.com` and click **Save** again.
6. This forces GitHub to retry the SSL certificate generation. Once successful, the "Enforce HTTPS" checkbox will become available and checkable automatically!

## Contact Intelligence Delivery

Your application's "Request Live Deal Review" form is hardcoded to submit to `singhabhitanwar07@gmail.com` using FormSubmit.co. 

**First Activation:**
When the first user submits a form, FormSubmit will send a confirmation email to `singhabhitanwar07@gmail.com`. You must click the activation link in that email to receive future submissions seamlessly.
