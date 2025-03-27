export const metadata = {
  title: "Kya janana chahte ho ",
  description: "Learn more about our company and team.",
  keywords: "about, company, team",
  openGraph: {
    title: "About Us - My Website",
    description: "Learn more about our company and team.",
    type: "website",
  },
};
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
    </html>
  );
}
