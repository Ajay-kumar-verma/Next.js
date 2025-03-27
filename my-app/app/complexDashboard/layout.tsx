export default function RootLayout({
  children,
  user,
  notification,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
}>) {
  return (
    <body>
      {children}
      {user}
      {notification}
    </body>
  );
}

// render once in life cycle
