# Deployment Guide for Raven Adversary (GitHub Pages)

This guide shows you how to host Raven Adversary on GitHub Pages using your custom domain **ravenadversary.com**.

## Prerequisites

1. Download or export this project from AI Studio to your local machine.
2. Initialize a git repository and push it to a new GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/your-username/your-repo-name.git
   git push -u origin main
   ```

## Deploying to GitHub Pages

We have already configured everything needed to automate the deployment process, including the `CNAME` file for your custom domain.

1. Open your terminal in the project directory.
2. Run standard installation:
   ```bash
   npm install
   ```
3. Run the automated deploy script:
   ```bash
   npm run deploy
   ```

This command will automatically bundle the application and push the compiled files to a `gh-pages` branch in your repository.

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

## Contact Intelligence Delivery

Your application's "Request Live Deal Review" form is hardcoded to submit to `singhabhitanwar07@gmail.com` using FormSubmit.co. 

**First Activation:**
When the first user submits a form, FormSubmit will send a confirmation email to `singhabhitanwar07@gmail.com`. You must click the activation link in that email to receive future submissions seamlessly.
