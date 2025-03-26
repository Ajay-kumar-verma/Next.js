export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body style={{backgroundColor:'blue'}}>
          {children}
        </body>
      </html>
    );
  }
  