import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <Link href="/complexDashboard/">DashBoard</Link>
    </>
  );
}

// render once in life cycle
