import './Navbar.css'; // Assuming you have a CSS file for styling

const Navbar = () => {
  return (
    <div className="header-wrapper">
      <header className="header">
        <nav className="navbar">
          <div className="navbar-logo">
            <a href="/">PTKK</a>
          </div>
          <ul className="navbar-links">
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="#contact-section">Contact</a></li>
          </ul>
        </nav>
        <div className="header-content">
          <div className="header-text">
            <h1>Find your perfect sound with our crafted musical instruments. Inspire every note!</h1>
          </div>
          <div className="header-image">
              <img src=".\src\images\ee-removebg-preview.png"/>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
