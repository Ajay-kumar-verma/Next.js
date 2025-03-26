import Link from 'next/link'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Link style={{margin:'10px'}} href='/'>Dashboard</Link>
        <Link style={{margin:'10px'}} href='/about'>About</Link>
        <Link style={{margin:'10px'}} href='/docs'>Docs</Link>
        <Link style={{margin:'10px'}} href='/home'>Home</Link>
        <Link style={{margin:'10px'}} href='/products/2143'>Products</Link>
        <Link style={{margin:'10px'}} href='/profile' replace>Profile</Link>

      </body>
    </html>
  );
}
