import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">ngejasa.in</div>
      <div className="nav-menu">
      <Link href="/#"><a>Beranda</a></Link>
      <Link href="/#services" scroll={true}><a>Layanan</a></Link>
      <Link href="/#about"><a>Tentang</a></Link>
      <Link href="https://api.whatsapp.com/send?phone=6281271310334"><a target="_blank">Kontak</a></Link>
      </div>
    </nav>
);
}
 
export default Navbar;