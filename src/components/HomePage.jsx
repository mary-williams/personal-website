import { useState, useEffect } from "react";
import InfoBox from "./InfoBox.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Photos from "./Photos.jsx";
import TypingHeading from "./TypingHeading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FiMapPin } from "react-icons/fi";
import { FiExternalLink } from "react-icons/fi";
import "./ContactPage.css";
import { black, lightAccent, accent, gray } from "../assets/colors";
import HomePageMobile from "./HomePageMobile";

const aboutMeArr = [
  "🤘 I currently attend the University of Texas at Austin as a Computer Science student and anticipate to graduate May 2027! I enjoy writing software that has beneficial impact and great design.",
  "🎓 After graduating, I aim to secure a role in a company where I can contribute to impactful projects, grow in a supportive, diverse community, and help shape the future of technology.",
  "⚖️  I’m driven by the desire to inspire future generations of creatives and lead positive change through technology. I’m passionate about the ethical responsibilities of developers and want to ensure that technology is developed with integrity and social good in mind.",
  "🌱 Whenever I have free time I like to read (typically fiction), take photos on my Fujifim XT4 or Olympus film camera, discover new music, explore new hobbies, and exploring Austin.",
];

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
}

function HomePage() {
  const isMobile = useIsMobile();

  return isMobile ? (
    // Mobile layout
    <HomePageMobile aboutMeArr={aboutMeArr} />
  ) : (
    // Desktop/laptop layout
    <div className="container-fluid py-4">
      <div className="row">
        {/* Main glassy InfoBox with all about me sections */}
        <div className="col-lg-8 col-12">
          <InfoBox size="xlarge" style={{ marginBottom: "0rem" }}>
            <TypingHeading
              text="Hi, I'm Mary 👾"
              className="mb-3"
              speed={150}
            />{" "}
            <div className="title-underline"></div>
            <h5 style={{ color: accent }}>About Me</h5>
            <div className="mb-3">{aboutMeArr[0]}</div>
            <div className="mb-3">{aboutMeArr[1]}</div>
            <div className="mb-3">{aboutMeArr[2]}</div>
            <div className="mb-4">{aboutMeArr[3]}</div>
            <h5 style={{ color: accent, marginTop: "2.5rem" }}>
              What I'm Currently Working On
            </h5>
            <i>
              {" "}
              I get excited about new personal projects and currently spend my
              time between these:{" "}
            </i>
            <div className="row g-3 mt-1 current-work">
              <div className="col-md-6 col-12">
                <InfoBox size="medium" header="Social Book App">
                  {
                    <p style={{ fontSize: "17px" }}>
                      Currently redesigning the popular reading app Goodreads
                      with a modern interface and new features like labeling
                      books as physically owned, so users can borrow amongst
                      themselves.{" "}
                    </p>
                  }
                </InfoBox>
              </div>
              <div className="col-md-6 col-12">
                <InfoBox size="medium" header="Photo Web App">
                  {
                    <p style={{ fontSize: "17px" }}>
                      A full stack web app that allows users to upload, delete,
                      browse, and tag photos. Users can search photos based on
                      tags and view photos in a slideshow. Currently being
                      Implemented with React and Flask.{" "}
                    </p>
                  }
                </InfoBox>
              </div>
            </div>
            <div style={{ marginTop: "2.5rem" }}>
              <h5 style={{ color: accent }}>Previous Projects</h5>
              <div
                className="hover-effect"
                style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
              >
                <InfoBox
                  size="small"
                  className="info-box"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  <a
                    href="https://github.com/mary-williams"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Check Out My Github
                    <FiExternalLink style={{ color: accent }} size={25} />
                  </a>
                </InfoBox>
                <InfoBox
                  size="small"
                  className="info-box"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  <a
                    href="/work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Or Check Out My Resume
                    <FiExternalLink
                      style={{ color: accent }}
                      className="external-icon"
                      size={25}
                    />
                  </a>
                </InfoBox>
                <InfoBox
                  size="small"
                  className="info-box"
                  style={{ flex: 1, textAlign: "center" }}
                >
                  <a
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Or Lets Make Something New Together
                    <FiExternalLink
                      style={{ color: accent }}
                      className="external-icon"
                      size={25}
                    />
                  </a>
                </InfoBox>
              </div>
            </div>
            <div
              style={{
                marginTop: "2.75rem",
                marginBottom: "2rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <InfoBox size="small">
                <Photos />
              </InfoBox>
            </div>
          </InfoBox>
        </div>
        {/* Sticky glassy side card */}
        <div className="col-lg-4 col-12">
          <div className="sticky-top" style={{ top: "4rem" }}>
            <InfoBox
              size="large"
              className="d-flex flex-column align-items-center justify-content-center"
              style={{ textAlign: "center" }}
            >
              <img
                src="/profile.jpg"
                alt="My Picture!"
                className="img-fluid rounded-4 w-75 mx-auto d-block mt-4 mb-2"
              />
              <div
                className="mb-2 w-auto"
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "fit-content",
                  textAlign: "center",
                  marginTop: "1rem",
                }}
              >
                <h1
                  style={{
                    fontSize: "30px",
                    fontWeight: "normal",
                    color: gray,
                  }}
                >
                  Mary Williams
                </h1>

                <div
                  style={{
                    background: "rgba(255, 255, 255, 0.033)",
                    borderRadius: "1.5rem",
                    padding: "1rem",
                    paddingTop: "0.7rem",
                    paddingBottom: "0.7rem",
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.15)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    width: "auto",
                    maxWidth: "200px",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      fontWeight: "normal",
                      paddingTop: "0.3rem",
                      color: gray,
                    }}
                  >
                    Software Developer
                  </h1>
                </div>
                <div
                  className="title-underline"
                  style={{
                    marginTop: "1rem",
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                  }}
                ></div>
              </div>

              <MusicPlayer />
              <div className="img-and-text d-flex flex-column align-items-start gap-3">
                {/* Email row */}
                <div className="d-flex align-items-center gap-2">
                  <InfoBox
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      maxWidth: "32px",
                      height: "32px",
                      borderRadius: "0.2rem",
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{ color: accent, fontSize: "20px" }}
                    />
                  </InfoBox>
                  <div className="email ms-2" style={{ margin: "0 0 10px 0" }}>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: gray,
                      }}
                    >
                      EMAIL
                    </span>
                    <br />
                    <a
                      href="mailto:marywilliams@utexas.edu"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      marywilliams@utexas.edu
                    </a>
                  </div>
                </div>
                {/* Location row */}
                <div className="d-flex align-items-center gap-2">
                  <InfoBox
                    className="d-flex align-items-center justify-content-center"
                    style={{ maxWidth: "32px", height: "32px" }}
                  >
                    <FiMapPin style={{ color: accent, fontSize: "22px" }} />
                  </InfoBox>
                  <div
                    className="location ms-2"
                    style={{ margin: "0 0 10px 0" }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        color: gray,
                      }}
                    >
                      LOCATION
                    </span>
                    <br />
                    <a style={{ color: "white" }}>Austin, TX</a>
                  </div>
                </div>
              </div>
            </InfoBox>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
