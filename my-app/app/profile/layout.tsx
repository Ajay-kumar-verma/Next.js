import Link from "next/link";

export default function page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{ color: "red", height: "100px", backgroundColor: "green" }}
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
      <Link href='/articles/breaking-news-123?lang=en'> Read in english</Link>
      <Link href='/articles/breaking-news-123?lang=fr'> Read in France</Link>
    </html>
  );
}
