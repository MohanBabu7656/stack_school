'use server';

export async function captureLead(prevState, formData) {
  const email = formData.get('email');
  
  // Simulate a network request / database save
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  if (!email) {
    return { success: false, message: 'Please provide a valid email address.' };
  }

  // Add your DB saving or email service logic here (e.g. Resend, Mailchimp, DB Insert)
  console.log('Successfully captured lead:', email);

  return { success: true, message: 'Check your inbox! Your roadmap is on the way.' };
}