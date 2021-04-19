const Navbar = () => {
  return ( 
    <nav className="navbar">
      <h1> The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/create" style={{
          color:"#fff", 
          backgroundColor: "#e1756d", 
          borderRadius: "8px",
          }}>Blog</a>
      </div>
    </nav>
   );
}
 
export default Navbar;