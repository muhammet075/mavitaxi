import { useEffect } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/img/header-logo.svg";
import hamburgerIco from "../assets/icons/hamburger.svg";
import closeIco from "../assets/icons/white-close.svg";

function Header() {

  useEffect(() => {
  }, []);

  function openHamburger(){
    document.querySelector(".hamburger").classList.add("blockhamburger")
    document.querySelector(".hamburgermenu").classList.remove("closehamburger");
    document.querySelector(".hamburgermenu").classList.add("openhamburger")
  }

  function closeHamburger(){
      document.querySelector(".hamburgermenu").classList.remove("openhamburger");
      document.querySelector(".hamburgermenu").classList.add("closehamburger")
      setTimeout(() => {
          document.querySelector(".hamburger").classList.remove("blockhamburger");
      }, 300);

  }

  return (
    <div className={styles.header}>
      <div>
        <section>
          <Link href='/'>
            <Image src={Logo} alt='Logo van Mavi Taxi' />
          </Link>

          <ul>
            <li><Link href="">info@mavitaxi.nl</Link></li>
            <li><Link href="">06123456789</Link></li>
            <li><Link href="">WhatsApp</Link></li>
          </ul>
        </section>

        <section></section>

        <button onClick={openHamburger}><Image src={hamburgerIco} alt="Hamburger menu Icoon"/></button>
      </div>

      <div className="hamburger">
        <nav className="hamburgermenu">
          <section>
            <ul>
              <li><Link href="/" onClick={closeHamburger}>Home</Link></li>
              <li><Link href="/" onClick={closeHamburger}>Prijzen</Link></li>
              <li><Link href="/" onClick={closeHamburger}>Over Ons</Link></li>
              <li><Link href="/" onClick={closeHamburger}>Rij Gebieden</Link></li>
              <li><Link href="/" onClick={closeHamburger}>Afspraak</Link></li>
            </ul>
          </section>
        </nav>
        <div onClick={closeHamburger}>
          <Image src={closeIco} alt="Sluit Icoon"/>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Header;
