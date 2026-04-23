'use server';
import { Resend } from 'resend';


// Initialize Resend with the API key from your .env.local file
const resend = new Resend(process.env.RESEND_API_KEY);

export async function captureLead(prevState, formData) {
  const email = formData.get('email');
  
  if (!email || typeof email !== 'string') {
    return { success: false, message: 'Please provide a valid email address.' };
  }

  try {
    const emailHtml = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc; padding: 40px 20px; color: #1e293b;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 20px; padding: 40px; box-shadow: 0 10px 25px -5px rgba(31, 38, 135, 0.05);">
          
          <h2 style="color: #172554; font-size: 28px; margin-top: 0; font-weight: 800; text-align: center;">
            Welcome to <span style="color: #f97316;">Stack</span> School
          </h2>
          
          <p style="font-size: 16px; line-height: 1.6; color: #475569;">
            Hi there,<br><br>
            Thank you for taking the first step towards launching your tech career! Master modern web development, build real-world projects, and accelerate your journey with our industry-leading bootcamps.
          </p>
          
          <p style="font-size: 16px; line-height: 1.6; color: #475569;">
            As promised, here is your <strong style="color: #10b981;">Free Python vs. Java Career Roadmap</strong>. Click the button below to download your copy and discover the path that aligns perfectly with your goals.
          </p>
          
          <div style="text-align: center; margin: 35px 0;">
            <a href="https://stackschool.com/roadmap.pdf" style="display: inline-block; background-color: #f97316; color: #ffffff; padding: 16px 32px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 12px;">
              Download My Roadmap
            </a>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
          
          <p style="font-size: 14px; color: #64748b; text-align: center; margin-bottom: 0; font-weight: 500;">
            Learn. Code. Succeed.<br>
            &copy; ${new Date().getFullYear()} Stack School. All rights reserved.
          </p>
        </div>
      </div>
    `;

    // ACTUAL FUNCTIONALITY: Send the roadmap email to the user
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'Stack School <hello@yourdomain.com>', // Note: You must verify this domain in your Resend dashboard
      to: [email],
      subject: 'Here is your Free Tech Career Roadmap! 🚀',
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return { success: false, message: 'Failed to send the email. Please try again later.' };
    }

    console.log('Successfully captured lead and sent email to:', email);
    return { success: true, message: 'Check your inbox! Your roadmap is on the way.' };
  } catch (error) {
    console.error('Server Action Error:', error);
    return { success: false, message: 'An unexpected error occurred.' };
  }
}