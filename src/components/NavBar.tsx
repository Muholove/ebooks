import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function NavBar() {
  const { state } = useCart();
  const count = state.items.reduce((n, i) => n + i.quantity, 0);
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link to="/" className="brand">Ebook Store</Link>
        <nav className="nav-links">
          <a
            href="https://t.me/nlyadm21"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-link"
          >
            Telegram @nlyadm21
          </a>
          <span className="nav-cta-text">Come to buy your content</span>
          <Link to="/">Home</Link>
          <Link to="/cart">Carrinho ({count})</Link>
        </nav>
      </div>
    </header>
  );
}


