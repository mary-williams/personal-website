import InfoBox from "./InfoBox.jsx";
import MusicPlayer from "./MusicPlayer.jsx";
import Photos from "./Photos.jsx";
import TypingHeading from "./TypingHeading.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FiMapPin, FiExternalLink } from "react-icons/fi";
import { black, lightAccent, accent, gray } from "../assets/colors";

function HomePageMobile({ aboutMeArr }) {
  return (
    <div className="container-phone py-4">
      {/* Profile Card */}
      <InfoBox
        size="large"
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ textAlign: "center", marginBottom: "1.5rem" }}
      >
        <img
          src="/profile.jpg"
          alt="My Picture!"
          className="img-fluid rounded-4 w-75 mx-auto d-block mt-4 mb-2"
        />
        <div
          className="mb-2 w-auto"
          style={{ margin: "1rem auto 0 auto", width: "fit-content" }}
        >
          <h1
            style={{
              fontSize: "26px",
              fontWeight: "normal",
              color: "rgb(88, 87, 87)",
            }}
          >
            Mary Williams
          </h1>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.25)",
              borderRadius: "1rem",
              backdropFilter: "blur(19px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
              padding: "0.2rem",
              maxWidth: "170px",
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: "15px",
                textAlign: "center",
                fontWeight: "normal",
                paddingTop: "0.3rem",
                color: accent,
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
        <div
          className="img-and-text d-flex flex-column align-items-start gap-3 mt-3"
          style={{ width: "100%" }}
        >
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
                style={{ color: black, textDecoration: "none" }}
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
            <div className="location ms-2" style={{ margin: "0 0 10px 0" }}>
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
              <a style={{ color: black }}>Austin, TX</a>
            </div>
          </div>
        </div>
      </InfoBox>

      {/* About Me Section */}
      <InfoBox size="large" style={{ marginBottom: "1.5rem" }}>
        <TypingHeading text="Hi, I'm Mary 👾" className="mb-3" speed={120} />
        <div className="title-underline"></div>
        <h5 style={{ color: accent }}>About Me</h5>
        <div className="mb-3">{aboutMeArr[0]}</div>
        <div className="mb-3">{aboutMeArr[1]}</div>
        <div className="mb-3">{aboutMeArr[2]}</div>
        <div className="mb-4">{aboutMeArr[3]}</div>
      </InfoBox>

      {/* Current Work Section */}
      <InfoBox size="large" style={{ marginBottom: "1.5rem" }}>
        <h5 style={{ color: accent }}>What I'm Currently Working On</h5>
        <i>I get excited about new projects and spend my time across these:</i>
        <div className="current-work mt-2">
          <InfoBox size="medium" header="Book App Design">
            <p style={{ fontSize: "16px" }}>
              Redesigning the popular reading app Goodreads with a modern
              interface. Creating new features like labeling books as physically
              owned, so users can borrow amongst themselves.
            </p>
          </InfoBox>
          <InfoBox size="medium" header="Mobile App Prototype">
            <p style={{ fontSize: "16px" }}>
              An app prototype to streamline communication apps such as Discord,
              Slack, Remind, GroupMe into one, making it easier for students to
              stay organized on communications.
            </p>
          </InfoBox>
          <InfoBox size="medium" header="Photo Web App">
            <p style={{ fontSize: "16px" }}>
              A web app that supports multiple users in uploading, deleting,
              browsing, and tagging photos. Users can search photos based on
              tags and view photos in a slideshow.
            </p>
          </InfoBox>
          <InfoBox size="medium" header="Privacy Policy Plugin">
            <p style={{ fontSize: "16px" }}>
              A web plugin to simplify reading and understanding policies you
              agree to online (that you usually skip reading anyway).
            </p>
          </InfoBox>
        </div>
      </InfoBox>

      {/*Projects Section */}
      <InfoBox size="large" style={{ marginBottom: "1.5rem" }}>
        <h5 style={{ color: accent }}>Previous Projects</h5>
        <div
          className="hover-effect"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <InfoBox
            size="small"
            className="info-box"
            style={{ textAlign: "center" }}
          >
            <a
              href="https://github.com/mary-williams"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Check out my github
              <FiExternalLink style={{ color: accent }} size={18} />
            </a>
          </InfoBox>
          <InfoBox
            size="small"
            className="info-box"
            style={{ textAlign: "center" }}
          >
            <a
              href="/work"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Or my resume
              <FiExternalLink
                style={{ color: accent }}
                className="external-icon"
                size={18}
              />
            </a>
          </InfoBox>
        </div>
      </InfoBox>

      {/* Photos Section */}
      <Photos />
    </div>
  );
}

export default HomePageMobile;
