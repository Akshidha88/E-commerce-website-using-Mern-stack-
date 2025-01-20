
import Navbar from './components/Navbar'; // Adjust the path if necessary
import './App.css'; // Assuming you have a CSS file for styling
import Product from './components/Product'

const App = () => {
  return (
    <div>
      <Navbar />
      <Product />
      <main>
        <section className="about-us">
          <h2>About Us</h2>
          <p>Welcome to PTKK, where music meets craftsmanship. Our mission is to provide you with the finest musical instruments that inspire every note you play. Whether you're a professional musician or a passionate beginner, we have something for everyone.</p>
        </section>
        <footer>
        <div id="contact-section" className="contact-section">
        <button className="contact-btn">Contact Us</button>
        </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
