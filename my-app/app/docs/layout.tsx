export default ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)=> {
    return (
      <html lang="en">
        <body>
          <header style={{color:'red',height:'100px',backgroundColor:'black'}}>Header</header>
          {children}
          <footer style={{color:'white',height:'100px',backgroundColor:'pink'}}>Footer</footer>
        </body>
      </html>
    );
  }
  