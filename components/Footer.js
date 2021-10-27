import Link from 'next/link';
const Footer = () => {
    return (
      <footer>
        <h2 className="toTop">
          <Link href="/#"><a>Back to Top</a></Link>
        </h2>
        &copy;2021 <a href="https://instagram.com/ngejasa.in/" target="_blank">ngejasa.in</a>
      </footer>
    );
  }
   
  export default Footer;