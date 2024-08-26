import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='h-12 w-full bg-zinc-800 text-white flex items-center justify-center gap-5'>
        <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/about">About</Link>
      <Link className="nav-link" to="/shop">Shop</Link>
      <Link className="nav-link" to="/testimonials">Testimonials</Link>
      <Link className="nav-link" to="/gallery">Gallery</Link>
      <Link className="nav-link" to="/register">My Account</Link>
      <Link className="nav-link" to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;
