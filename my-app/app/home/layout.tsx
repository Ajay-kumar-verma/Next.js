export async function generateMetadata() {
  const post = {
    title: "pics",
    excerpt: "xyz",
  };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{ color: "red", height: "100px", backgroundColor: "blue" }}
        >
          Header
        </header>
        {children}
        <footer
          style={{ color: "white", height: "100px", backgroundColor: "pink" }}
        >
          Footer
        </footer>
      </body>
    </html>
  );
}
