import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (
    <div className={styles.navContainer}>
      <nav className={styles.nav}>
        <div className={styles.navLeft}>
          <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="/logo.png"
              width={64}
              height={64}
              alt="NFT marketplace sample logo"
            />
          </Link>

          <div className={styles.navMiddle}>
            <Link href="/buy"  style={{ color: 'white', fontWeight: 'bold' }}  className={styles.link}>
              Buy
            </Link>
            <Link href="/sell"  style={{ color: 'white', fontWeight: 'bold' }}  className={styles.link}>
              Sell
            </Link>
            <Link href="https://renthousenft.vercel.app/"   style={{ color: 'white', fontWeight: 'bold' }} className={styles.link}>
              Mining
            </Link>
          </div>
        </div>

        <div className={styles.navRight}>
          <div className={styles.navConnect}>
            <ConnectWallet />
          </div>
          User
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={61}
                height={61}
                alt="Profile"
                
              />
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
}
