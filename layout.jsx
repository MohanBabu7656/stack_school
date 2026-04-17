import './globals.css'

export const metadata = {
  title: 'Stack School | Launch Your Tech Career',
  description: 'Master modern web development and accelerate your career.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}