import { chaossLogo, gitLabLogo, githubSponsor } from "../../assets/images";
import "../../assets/styles/global.scss";
import Nav from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./home.scss";

const Home = () => {
  return (
    <div className="home-container ">
      <Nav />

      <div className="overlay">
        <div className="bgRight"></div>
        <div className="bgCenter"></div>
        <div className="bgLeft"></div>
      </div>
      <section className="hero container-new">
        <div className="hero-header">
          <h1>CHAOSS DEI Badging Initiative</h1>
          <div>
            <p>
              The CHAOSS DEI Badging Initiative is a{" "}
              <a href="https://chaoss.community">CHAOSS</a>
              project that awards badges to open-source projects and events.
              These badges are used to showcase commitment to improving and
              supporting diversity, equity, and inclusion.
            </p>
          </div>
         
        </div>
        <div className="badge-counter">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99115 12.6417C8.82448 12.6417 8.66615 12.575 8.54948 12.4584L6.53281 10.4417C6.29115 10.2 6.29115 9.80002 6.53281 9.55836C6.77448 9.31669 7.17448 9.31669 7.41615 9.55836L8.99115 11.1334L12.5745 7.55002C12.8161 7.30836 13.2161 7.30836 13.4578 7.55002C13.6995 7.79169 13.6995 8.19169 13.4578 8.43336L9.43281 12.4584C9.31615 12.575 9.15781 12.6417 8.99115 12.6417Z"
                fill="#D61B5E"
              />
              <path
                d="M9.99909 18.9584C9.47409 18.9584 8.94909 18.7834 8.54075 18.4334L7.22409 17.3C7.09075 17.1834 6.75742 17.0667 6.58242 17.0667H5.14909C3.91575 17.0667 2.91576 16.0667 2.91576 14.8334V13.4084C2.91576 13.2334 2.79909 12.9084 2.68242 12.775L1.55742 11.45C0.874089 10.6417 0.874089 9.36669 1.55742 8.55835L2.68242 7.23335C2.79909 7.10002 2.91576 6.77502 2.91576 6.60002V5.16669C2.91576 3.93335 3.91575 2.93335 5.14909 2.93335H6.59075C6.76575 2.93335 7.09909 2.80835 7.23242 2.70002L8.54909 1.56669C9.36576 0.866687 10.6408 0.866687 11.4574 1.56669L12.7741 2.70002C12.9074 2.81669 13.2408 2.93335 13.4158 2.93335H14.8324C16.0658 2.93335 17.0658 3.93335 17.0658 5.16669V6.58335C17.0658 6.75835 17.1908 7.09169 17.3074 7.22502L18.4408 8.54169C19.1408 9.35835 19.1408 10.6334 18.4408 11.45L17.3074 12.7667C17.1908 12.9 17.0658 13.2334 17.0658 13.4084V14.825C17.0658 16.0584 16.0658 17.0584 14.8324 17.0584H13.4158C13.2408 17.0584 12.9074 17.1834 12.7741 17.2917L11.4574 18.425C11.0491 18.7834 10.5241 18.9584 9.99909 18.9584ZM5.14909 4.18335C4.60742 4.18335 4.16576 4.62502 4.16576 5.16669V6.59169C4.16576 7.06669 3.94076 7.67502 3.63242 8.03335L2.50742 9.35835C2.21576 9.70002 2.21576 10.2917 2.50742 10.6334L3.63242 11.9584C3.94076 12.325 4.16576 12.925 4.16576 13.4V14.825C4.16576 15.3667 4.60742 15.8084 5.14909 15.8084H6.59075C7.07409 15.8084 7.68242 16.0334 8.04909 16.35L9.36576 17.4834C9.70742 17.775 10.3074 17.775 10.6491 17.4834L11.9658 16.35C12.3324 16.0417 12.9408 15.8084 13.4241 15.8084H14.8408C15.3824 15.8084 15.8241 15.3667 15.8241 14.825V13.4084C15.8241 12.925 16.0491 12.3167 16.3658 11.95L17.4991 10.6334C17.7908 10.2917 17.7908 9.69169 17.4991 9.35002L16.3658 8.03335C16.0491 7.66669 15.8241 7.05835 15.8241 6.57502V5.16669C15.8241 4.62502 15.3824 4.18335 14.8408 4.18335H13.4241C12.9408 4.18335 12.3324 3.95835 11.9658 3.64169L10.6491 2.50835C10.3074 2.21669 9.70742 2.21669 9.36576 2.50835L8.04909 3.65002C7.68242 3.95835 7.06575 4.18335 6.59075 4.18335H5.14909Z"
                fill="#D61B5E"
              />
            </svg>
            <p>167 events and 5 projects badged</p>
          </div>

        <div className="sponsors">
          <div className="s-list">
            <p>Founding Partner</p>
            <div className="sponsors-logo">
              <img src={githubSponsor} alt="logo" width={80} height={20} />
            </div>
          </div>
          <div className="s-list">
            <p>Contributing Partners</p>
            <div className="sponsors-logo">
              <img src={gitLabLogo} alt="logo" width={90} height={20} />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
