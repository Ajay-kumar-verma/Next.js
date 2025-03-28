export default function RootLayout({
  children,
  user,
  notification,
  login,
}: Readonly<{
  children: React.ReactNode;
  user: React.ReactNode;
  notification: React.ReactNode;
  login: React.ReactNode;
}>) {
  const isLoggedIn = true;

  return isLoggedIn ? (
    <body>
      {children}
      {user}
      {notification}
    </body>
  ) : (
    login
  );
}

// render once in life cycle
