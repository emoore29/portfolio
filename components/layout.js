import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import menuIcon from "../public/images/menu-icon.svg";

const name = "Emma Moore";
export const siteTitle = "Emma Moore - Web Developer";

export default function Layout({ children, home }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Emma Moore's web development portfolio."
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
      </Head>
      <header className={home ? `${styles.header}` : `${styles.blogHeader}`}>
        {home ? (
          <>
            <h1
              className={`${utilStyles.headingXl} ${utilStyles.fontLora} ${styles.name}`}
            >
              {name}
            </h1>
            <p
              className={`${utilStyles.fontLora} ${utilStyles.italic} ${styles.title}`}
            >
              web developer
            </p>

            <nav className={styles.navBar}>
              <ul className={styles.navList}>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#portfolio">Portfolio</a>
                </li>
                <li>
                  <a href="/#skills">Skills</a>
                </li>

                <li>
                  <Link href="/notes">Notes</Link>
                </li>
                <li>
                  <a href="/#contact">Contact</a>
                </li>
              </ul>
            </nav>
            <div className={styles.mobileNav}>
              <button>
                <Image
                  onClick={toggleMenu}
                  priority
                  src={menuIcon}
                  alt="Menu button"
                  width="35"
                  height="35"
                />
              </button>
              {isOpen && (
                <nav className={styles.mobileNavList}>
                  <ul>
                    <li>
                      <a onClick={toggleMenu} href="/#about">
                        About
                      </a>
                    </li>
                    <li>
                      <a onClick={toggleMenu} href="/#portfolio">
                        Portfolio
                      </a>
                    </li>
                    <li>
                      <a onClick={toggleMenu} href="/#skills">
                        Skills
                      </a>
                    </li>

                    <li>
                      <Link onClick={toggleMenu} href="/blog">
                        Notes
                      </Link>
                    </li>
                    <li>
                      <a onClick={toggleMenu} href="/#contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              )}
            </div>
          </>
        ) : (
          <>
            <h2 className={`${utilStyles.headingXl} ${utilStyles.fontLora}`}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
