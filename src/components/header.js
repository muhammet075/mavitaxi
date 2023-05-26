import { useEffect } from "react";
import styles from "../styles/header.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/img/header-logo.svg";

function Header() {

  useEffect(() => {
  }, []);

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
      </div>

      <div>
        <nav>
          <section>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Prijzen</Link></li>
              <li><Link href="/">Over Ons</Link></li>
              <li><Link href="/">Rij Gebieden</Link></li>
              <li><Link href="/">Afspraak</Link></li>
            </ul>
          </section>
        </nav>
      </div>

      <div></div>
    </div>
  );
}

export default Header;
