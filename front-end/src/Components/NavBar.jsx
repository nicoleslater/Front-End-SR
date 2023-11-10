export default function NavBar(){
    return (
        <header>
          <img src="../public/photo-1623475329493-889804e377f8.avif"></img>
          <Link to="/">
            <h2>Home</h2>
          </Link>
          <Link to="/about">
            <h2>About Us!</h2>
          </Link>
        </header>
      );
}