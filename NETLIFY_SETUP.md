# Netlify Forms Email Setup

Your contact form is now configured to work with Netlify Forms! Follow these steps to receive email notifications at **opalinee@gmail.com**.

## Post-Deployment Steps

After deploying your site to Netlify:

1. **Go to your Netlify dashboard** for this site

2. **Navigate to**: `Site settings` → `Forms` → `Form notifications`

3. **Click** "Add notification" → "Email notification"

4. **Configure the email**:
   - **Event to listen for**: New form submission
   - **Form**: contact
   - **Email to notify**: opalinee@gmail.com
   - You can customize the email subject and body if needed

5. **Save** the notification

## Testing the Form

1. After deploying, visit your live site's contact page
2. Fill out and submit the test form
3. Check your Netlify dashboard under `Forms` to see the submission
4. Check opalinee@gmail.com for the email notification

## Form Features Included

✅ **Spam Protection**: Honeypot field to filter bots  
✅ **Success Message**: Users see confirmation after submission  
✅ **Form Validation**: Required fields for name, email, subject, and message  
✅ **Data Collection**: All submissions stored in Netlify dashboard  
✅ **Email Notifications**: Get alerts at opalinee@gmail.com

## Viewing Form Submissions

All form submissions are stored in your Netlify dashboard:
- Go to your site dashboard
- Click on the "Forms" tab
- Select the "contact" form to view all submissions

## Additional Resources

- [Netlify Forms Documentation](https://docs.netlify.com/forms/setup/)
- [Email Notifications Setup](https://docs.netlify.com/forms/notifications/)
