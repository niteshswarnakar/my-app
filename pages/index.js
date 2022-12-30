/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className={styles.homepage}>
        <nav className={styles.navbar}>
          <ul className={styles.navlinks}>
            <div className={styles.leftnav}>
              <li className={styles.iamnitesh}>
                iam<span className={styles.nitesh_span}>nitesh</span>
              </li>
            </div>
            <div className={styles.rightnav}>
              <li className={styles.home}>Home</li>
              <li>About</li>
              <li>Contact</li>
            </div>
          </ul>
        </nav>
        <main className={`${styles.main}`}>
          <div className={`${styles.container} ${styles.section_main} `}>
            <div className={styles.left_main}>
              <div className={styles.contactlinks}>
                <ul className={styles.social_links}>
                  <li>facebook</li>
                  <li>instagram</li>
                  <li>linkedine</li>
                </ul>
              </div>
              <div className={styles.introduction_heading}>
                I am a developer
              </div>
              <div className={styles.description_heading}>
                <p>
                  I am passionate developer who loves to explore new things
                  everyday.
                </p>
                <p>Web development, Graphic Design, DevOps Engineering</p>
              </div>
              <div className={styles.action_button}>
                <div className={styles.my_work}>
                  <a href="">My work</a>
                </div>
                <div className={styles.hire_me}>
                  <a href="">Hire me</a>
                </div>
              </div>
            </div>
            <div className={styles.right_main}>
              Portfolio website is still under development :)
            </div>
          </div>
        </main>
      </section>

      <footer className={styles.footer}>
        <h3>@copyright</h3>
      </footer>
    </div>
  );
}
