# Deployment Guide for AI SEO Audit Funnel

This guide provides step-by-step instructions for deploying your AI SEO Audit Funnel on Replit.

## Prerequisites

1. A Replit account (create one at [replit.com](https://replit.com) if you don't have one)
2. An OpenAI API key (get one at [platform.openai.com/api-keys](https://platform.openai.com/api-keys))
3. Email service credentials (webmail or SMTP service)

## Step 1: Fork the Project

1. Visit the original Repl at [replit.com/@username/ai-seo-audit-funnel](https://replit.com/@username/ai-seo-audit-funnel)
2. Click the "Fork" button at the top of the page
3. Wait for the forking process to complete

## Step 2: Configure Environment Variables

1. In your forked Repl, click on the "Secrets" tool in the left sidebar (lock icon)
2. Add the following secrets:

   | Key | Value | Description |
   |-----|-------|-------------|
   | `OPENAI_API_KEY` | `sk-...` | Your OpenAI API key |
   | `EMAIL_HOST` | `mail.example.com` | Your email SMTP server |
   | `EMAIL_PORT` | `465` | Your email SMTP port (usually 465 for SSL) |
   | `EMAIL_USER` | `reports@example.com` | Email address for sending reports |
   | `EMAIL_PASS` | `your-password` | Password for the email account |
   | `OWNER_EMAIL` | `you@example.com` | Where you want to receive lead notifications |

   > **Note**: No database is required - the application uses in-memory storage.

## Step 3: Start the Application

## Step 4: Test the Application

1. Click the "Run" button at the top of the Replit interface
2. Wait for the application to start up
3. When the application is running, you'll see a webview panel with your application
4. Test the application by:
   - Entering a test website URL
   - Completing the form flow
   - Checking that emails are delivered correctly

## Step 5: Deploy to Production

1. Click the "Deploy" button in the header section of Replit
2. In the deployment modal:
   - Select "Web Service" as the deployment type
   - Keep the default settings (HTTP port 5000)
   - Click "Deploy"

3. After deployment completes, you'll get a production URL like:
   ```
   https://ai-seo-audit-funnel.yourusername.repl.co
   ```

4. Your application is now live and ready to use!

## Step 6: Custom Domain Setup (Optional)

If you want to use your own domain instead of the Replit domain:

1. In your Replit Dashboard, select your project
2. Click on "Settings"
3. Scroll down to "Custom Domain"
4. Follow the instructions to connect your domain

## Troubleshooting Deployment Issues

### Application Not Starting

If your application fails to start:
1. Check the console logs for errors
2. Verify all environment variables are set correctly
3. Make sure the database migration was successful

### Email Delivery Problems

If emails aren't being sent:
1. Verify your email credentials are correct
2. Check if your email provider requires any special configurations
3. Ensure your email provider allows sending from applications

### OpenAI API Issues

If the AI analysis isn't working:
1. Verify your OpenAI API key is valid
2. Check if you have sufficient credits
3. Look for any rate limiting errors in the logs

## Updating Your Deployment

When you make changes to your application:

1. Push your changes to your Replit repository
2. Click "Deploy" again to update your live application

---

For additional help or questions, refer to the main README.md file or contact the original developer.