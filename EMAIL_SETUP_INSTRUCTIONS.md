# 📧 Setup Email Notifications for Contact Form

## Your email: opalinee@gmail.com

Your contact form is **already configured** and ready to work with Netlify Forms! The code is complete. You just need to enable email notifications in Netlify after deployment.

---

## Step-by-Step Instructions

### After you deploy your site to Netlify:

1. **Log in to Netlify** at https://app.netlify.com

2. **Select your site** from the dashboard

3. **Navigate to Forms settings**:
   - Click on **"Site settings"** (in the top menu)
   - Click on **"Forms"** (in the left sidebar)
   - Click on **"Form notifications"**

4. **Add email notification**:
   - Click the **"Add notification"** button
   - Select **"Email notification"**
   - Fill in the form:
     - **Event to listen for**: New form submission
     - **Form**: contact
     - **Email to notify**: `opalinee@gmail.com`
   - Click **"Save"**

5. **Test it**:
   - Go to your live website
   - Navigate to the Contact page
   - Fill out and submit the form
   - Check `opalinee@gmail.com` for the notification!

---

## What Happens When Someone Submits the Form?

1. ✅ User fills out the contact form on your website
2. ✅ Form data is sent to Netlify
3. ✅ Netlify stores the submission in your dashboard
4. ✅ Netlify sends an email to: **opalinee@gmail.com**
5. ✅ User sees a success message on the website

---

## Where to View All Form Submissions?

You can view all form submissions in your Netlify dashboard:

1. Go to your site dashboard
2. Click on **"Forms"** in the top navigation
3. Click on the **"contact"** form
4. See all submissions with full details (name, email, phone, subject, message)

---

## Important Notes

- ⚠️ Email notifications only work **AFTER** you configure them in Netlify (steps above)
- ⚠️ The form will still collect submissions even before you set up email notifications
- ⚠️ Make sure to test the form after deployment to confirm everything works
- ✅ No backend server needed - Netlify handles everything!

---

## Need Help?

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Email Notifications Guide](https://docs.netlify.com/forms/notifications/)
