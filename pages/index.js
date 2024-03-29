/* eslint-disable @next/next/no-page-custom-font */
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "next-share";

import myimage from "../assets/myimage.jpg";

import { SocialIcon } from "react-social-icons";

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
                <a href="">
                  iam<span className={styles.nitesh_span}>nitesh</span>
                </a>
              </li>
            </div>
            <div className={styles.rightnav}>
              <li className={styles.home}>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Projects</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </div>
          </ul>
        </nav>
        <main className={`${styles.main}`}>
          <div className={`${styles.container} ${styles.section_main} `}>
            <div className={styles.left_main}>
              <div className={styles.contactlinks}>
                <ul className={styles.social_links}>
                  <li>
                    {/* <FacebookShareButton url="https://www.facebook.com/nitesh.sunar/">
                      <FacebookIcon size={32} round />
                    </FacebookShareButton> */}
                    <SocialIcon
                      url="https://www.facebook.com/nitesh.sunar/"
                      bgColor="#127bf7"
                      style={{ height: 32, width: 32 }}
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url="https://www.instagram.com/iamniteshswarnakar/"
                      bgColor="#127bf7"
                      style={{ height: 32, width: 32 }}
                    />
                  </li>
                  <li>
                    <SocialIcon
                      url="https://np.linkedin.com/in/nitesh-swarnakar-75411a142"
                      bgColor="#127bf7"
                      style={{ height: 32, width: 32 }}
                    />
                  </li>
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
                <div>
                  <a className={styles.my_work} href="">
                    MY WORK
                  </a>
                </div>
                <div>
                  <a className={styles.hire_me} href="">
                    HIRE ME
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.right_main}>
              Portfolio website is still under development :)
            </div>
          </div>
        </main>

        <section className={styles.section_detail}>
          <div className={styles.container}>
            <div className={styles.section_detail_layout}>
              <div className={styles.detail_left}>
                <div>
                  <Image
                    className={styles.myimage}
                    // loader={myLoader}
                    src={myimage}
                    alt="Picture of the author"
                    width={400}
                  />
                  <div> &nbsp;</div>
                  <div> &nbsp;</div>
                  <div> &nbsp;</div>
                  <div> &nbsp;</div>
                  <div> &nbsp;</div>
                  <div> &nbsp;</div>
                  <div> &nbsp;</div>
                </div>
                <div className={styles.my_skills}>
                  <ul className={styles.skills_list}>
                    <li>
                      <p>Web Development</p>
                      <div className={styles.web_div}>
                        <div
                          className={`${styles.progressbar} ${styles.web_progressbar} `}></div>
                      </div>
                    </li>
                    <li>
                      <p>Graphic Design</p>
                      <div className={styles.web_div}>
                        <div
                          className={`${styles.progressbar} ${styles.graphic_progessbar} `}></div>
                      </div>
                    </li>
                    <li>
                      <p>DevOps</p>
                      <div className={styles.web_div}>
                        <div
                          className={`${styles.progressbar} ${styles.devOps_progessbar} `}></div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.detail_right}>
                <div className={styles.about_me}>About me</div>
                <div className={styles.my_description}>
                  <p>
                    I am nitesh Swarnakar. I am computer engineering student 8th
                    semester running. I am orginally from Rajapur, Bardiya. I am
                    currently living in Pulchowk, Lalitpur. I am web developer.
                    I am passionate and dedicated to my work.
                  </p>
                </div>
                <div className={styles.my_details_description}>
                  <div>
                    <p className={styles.field_name}>Name</p>
                    <p className={styles.field_value}>Nitesh Swarnakar</p>
                  </div>
                  <div>
                    <p className={styles.field_name}>Email</p>
                    <p className={styles.field_value}>
                      nitesh.swarnakar1@gmail.com
                    </p>
                  </div>
                </div>
                <div className={styles.my_details_description}>
                  <div>
                    <p className={styles.field_name}>Phone Number</p>
                    <p className={styles.field_value}>random_number :)</p>
                  </div>
                  <div>
                    <p className={styles.field_name}>Instagram</p>
                    <p className={styles.field_value}>@iamniteshswarnakar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <h3 className={styles.copyright}>@copyright</h3>
        </footer>
      </section>
    </div>
  );
}
