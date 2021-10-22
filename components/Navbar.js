import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">ngejasa.in</div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
    </nav>
);
}
 
export default Navbar;