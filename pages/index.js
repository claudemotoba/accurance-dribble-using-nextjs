import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image';
import { 
  AiOutlineSearch, 
  AiOutlineFileExcel, 
  AiFillHeart, 
  AiFillStar, 
  AiFillCheckSquare, 
  AiOutlineUpload
} from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'

import styles from '../styles/Home.module.scss';
import { Layout } from '../components/layout/main';
import { TryForFree } from '../components/cards/try-for-free/try-for-free';
import { ViktorCard } from '../components/cards/viktor/viktor';
import { StatProject } from '../components/cards/stat-project/stat-project';
import { HowToFind } from '../components/cards/fin-card/how-find';
import { CompagnieFinance } from '../components/cards/compagny-finance/compagny-finance';
import { ClientSpeak } from '../components/cards/client-speak/client-speak';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Landing Page By Claude MOTOBA</title>
        <meta name="description" content="Integration landing page using nextjs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        
        <div className={styles.first_section}>
          <div className={styles.find_profesional}>
            <div className={styles.get_best}>
              <div className={styles.line_h4}></div>
              <h4>
                Get Best Accountant
              </h4>
              
            </div>
            <h1>
              Find Your Profesional Accountant Fast
            </h1>
            <p className={styles.paragraphe}>
              Next.js gives us CSS Modules by default, providing benefits like scoped styles and focused development in our app. How can we give our Next.js CSS superpowers with Sass?
            </p>

            <TryForFree/>

            <p className={styles.synced_contacts}>
              Synced contacts
            </p>

            
          </div>
          <div className={styles.section_picture}>
            <div className={styles.first_card_check}>
              
              <div className={styles.card_check}>
                <AiFillCheckSquare/>
              </div>
            </div>


            <ViktorCard/>
          </div>
        </div>
        <div className={styles.stat}>
          <StatProject/>
        </div>

        <div className={styles.container_all_partainers}>
          <div>
            <Image
              src="/images/airbnb.png"
              width={100}
               height={30}
            />
          </div>
          <div>
            <Image
              src="/images/microsoft.png"
              width={120}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/facebook.png"
              width={100}
              height={50}
            />
          </div>
          <div>
            <Image
              src="/images/walmart.png"
              width={100}
              height={40}
            />
          </div>
          <div>
            <Image
              src="/images/fedex.png"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className={styles.find_best_accountant}>
          <h2>How to find the best accountants</h2>
          <p>The fast way to find your best accoutant</p>
          <div className={styles.container_how_find}>
            <HowToFind
              title = "Find Your Accountant"
              content = "Constructs an observable that, when subscribed, causes the configured DELETE request to execute on the server."
              icon = {<AiOutlineSearch />}
              textcolor="#04BF9D"
              backcolor="#E8FFFC"
            />
            <HowToFind
              title = "Make an appointment"
              content = "Constructs an observable that, when subscribed, causes the configured DELETE request to execute on the server."
              icon = {<AiOutlineFileExcel />}
              textcolor="#F29F05"
              backcolor="#FFF5D9"
            />
            <HowToFind
              title = "Let's start working"
              content = "Constructs an observable that, when subscribed, causes the configured DELETE request to execute on the server."
              icon = {<BsBag />}
              textcolor="#4C6FFF"
              backcolor="#E4E9FF"
            />
          </div>
        </div>

        <div className={styles.third_section}>
          <div className={styles.find_for_your_as}>
            <div className={styles.get_best}>
              <div className={styles.line_h4}></div>
              <h4>
                Get Best Accountant
              </h4>
              
            </div>
            <h2>
              Find job for you as Accountant
            </h2>
            <p>
              The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords (although note browser support), and deal with helping you prevent aligning elements such that the content becomes inaccessible.
            </p>
            <div className={styles.footer_third_section}>
              <div className={styles.container_button}>
                <button>
                  <AiOutlineUpload/>
                  Upload CV
                </button>
              </div>
              <div className={styles.looking_link}>
                <Link href="#">
                  <a>looking for on employee ?</a>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles.content_card_compagny}>
            <CompagnieFinance/>
          </div>

        </div>



        <div className={styles.four_section}>
            <div className={styles.container_profil}>
              <ViktorCard/>
            </div>

            <div className={styles.hire_your_as}>
              <div className={styles.get_best}>
                <div className={styles.line_h4}></div>
                <h4>
                  Get Best Accountant
                </h4>
                
              </div>
              <h2>
                Hire your Accountant and get contact
              </h2>
              <p>
                The safe and unsafe modifier keywords can be used in conjunction with all the rest of these keywords (although note browser support), and deal with helping you prevent aligning elements such that the content becomes inaccessible.
              </p>
              <div className={styles.footer_third_section}>
                <div className={styles.container_button}>
                  <button>Hire Employe</button>
                </div>
                <div className={styles.looking_link}>
                  <Link href="#">
                    <a>looking for a job ?</a>
                  </Link>
                </div>
              </div>
            </div>
        </div>

        <div className={styles.five_section}>

          <h2>
            Our Accountant and Client speak
          </h2>
          <p>The fast way to find your best accoutant</p>

          <div className={styles.container_three_card}>
            <ClientSpeak
              name="Claude Motoba"
              skill="Front-End Developer"
              title="Helping Your Business"
            />
            <ClientSpeak
              name="Jonas Fernando"
              skill="Fullstack Developer"
              title="Best service"
            />
            <ClientSpeak
              name="Michael Cooper"
              skill="UI UX Designer"
              title="Multilevel Impressed"
            />
          </div>
        </div>

        <div className={styles.container_tenK_and_four}>

          <div className={styles.tenKandfourK}>

            <div className={styles.tenK}>
              <h3>10k</h3>
              <div>
                <AiFillHeart/>
                <AiFillHeart/>
                <AiFillHeart/>
                <AiFillHeart/>
                <AiFillHeart/>
              </div>
              <p>Active Freelancers</p>
              <div className={styles.looking_link}>
                <Link href="#">
                  <a>One website</a>
                </Link>
              </div>
            </div>

            <div className={styles.fourK}>
              <h3>4.7k</h3>
              <div>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
              </div>
              <p>1,588 Reating</p>
              <div className={styles.looking_link}>
                <Link href="#">
                  <a>Accurance Client</a>
                </Link>
              </div>
            </div>

          </div>

          <div className={styles.container_trusted}>
            <h3>Trusted by 15,000+ happy Client and Accountant users since 2018</h3>
            <p>Also featured in</p>
            <div className={styles.container_images_part}>
              <div>
                <Image
                  src="/images/google.png"
                  width={80}
                  height={30}
                />
              </div>
              <div>
                <Image
                  src="/images/microsoft.png"
                  width={120}
                  height={35}
                />
              </div>
              <div>
                <Image
                  src="/images/facebook.png"
                  width={80}
                  height={50}
                />
              </div>
            </div>
            <div className={styles.looking_link}>
              <Link href="#">
                <a>Read more</a>
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.grand_container}>
          <div className={styles.container_subscribe}>
            <div className={styles.not_inspi}>
              <h3>Subscribe Now for Get Special Features</h3>
              <p>
                Let's subscribe with us and find the fun
              </p>
            </div>
            <div className={styles.container_button}>
              <button>Subscribe now</button>
            </div>
          </div>
        </div>

      </Layout>

    </div>
  )
}
