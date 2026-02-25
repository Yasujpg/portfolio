import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { FiMail, FiMapPin } from "react-icons/fi"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

function App() {

  const [darkMode, setDarkMode] = useState(false)
  const [showScroll, setShowScroll] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true)
      } else {
        setShowScroll(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <section className="hero">
        <h1 className="title">Yasmine Benhammou</h1>
        <div className="line"></div>
        <p className="subtitle">
          Front-End Developer crafting modern and elegant web experiences
        </p>
        <a href="#projects">
          <button className="btn">View My Work</button>
        </a>
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience" className="experience">
  <h2>Work Experience</h2>

  <div className="jobs-wrapper">

    <div className="job-card">
      <div className="job-inner">
        <h3>Front-End Web Developer</h3>
        <p className="company">
          Bruver | Jan 2026 – Feb 2026
        </p>

        <ul>
          <li>
            Developed and implemented responsive front-end components for the company website.
          </li>
          <li>
            Translated design requirements into functional and user-friendly interfaces.
          </li>
          <li>
            Collaborated with the team to ensure consistency, usability, and performance.
          </li>
        </ul>

        <a
          href="https://github.com/reposocratech/MVP-Bruver"
  target="_blank"
  rel="noopener noreferrer"
  className="btn-github"
        >
          <FaGithub className="github-icon" />
          <span>View on GitHub</span>
        </a>

      </div>
    </div>

    <div className="job-card">
      <div className="job-inner">
        <h3>Customer Service Agent</h3>
        <p className="company">
          Concentrix | Jul 2023 - Jul 2025
        </p>
        <ul>
          <li>
            Communication with clients in Spanish and English and follow-up on final payments.
          </li>
          <li>
            Administrative tasks including Excel management, SAP operations and customer resolution.
          </li>
        </ul>
      </div>
    </div>

    <div className="job-card">
      <div className="job-inner">
        <h3>Customer Service Agent</h3>
        <p className="company">
          Sosmatic | Oct 2020 - Mar 2023
        </p>
        <ul>
          <li>
            Customer support in Spanish and English via calls and coordination.
          </li>
          <li>
            Back-office administrative tasks and issue resolution.
          </li>
        </ul>
      </div>
    </div>

  </div>
</section>


<section id="education" className="education-code-section">
  <h2>Education</h2>

  <div className="education-code-grid">

    <div className="code-window">
      <div className="code-header">
        <span className="dot burgundy"></span>
        <span className="dot beige"></span>
        <span className="dot dark"></span>
      </div>

      <div className="code-body">
        <pre>
<code>
<span className="code-key">SOCRATECH</span> {"{"}

<br></br>

    <span className="code-prop">PROGRAM</span>: <span className="code-string">"FULL-STACK WEB DEVELOPER"</span>,
    <br></br>

    <span className="code-prop">PERIOD</span>: <span className="code-string">"SEP 2025 – FEB 2026"</span>

{"}"}
</code>
        </pre>

        <a
          href={`${import.meta.env.BASE_URL}certificate-socratech.pdf`}
          download
          className="retro-btn"
        >
          <span className="retro-text">DOWNLOAD CERTIFICATE</span>

          <span className="retro-icon">
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="1.6" cy="1.6" r="1.5" />
              <circle cx="5.7" cy="1.6" r="1.5" />
              <circle cx="5.7" cy="5.5" r="1.5" />
              <circle cx="9.8" cy="5.5" r="1.5" />
              <circle cx="9.8" cy="9.5" r="1.5" />
              <circle cx="13.9" cy="9.5" r="1.5" />
              <circle cx="5.7" cy="13.4" r="1.5" />
              <circle cx="9.8" cy="13.4" r="1.5" />
              <circle cx="1.6" cy="17.3" r="1.5" />
              <circle cx="5.7" cy="17.3" r="1.5" />
            </svg>
          </span>
        </a>

      </div>
    </div>

    <div className="code-window">
      <div className="code-header">
        <span className="dot burgundy"></span>
        <span className="dot beige"></span>
        <span className="dot dark"></span>
      </div>

      <div className="code-body">
        <pre>
<code>
<span className="code-key">UNIVERSIDAD SAN JORGE</span> {"{"}

<br></br>

    <span className="code-prop">DEGREE</span>: <span className="code-string">"INTERIOR DESIGN"</span>,
    <br></br>

    <span className="code-prop">PERIOD</span>: <span className="code-string">"MAR 2020 – SEP 2024"</span>

{"}"}
</code>
        </pre>
      </div>
    </div>

  </div>
</section>

<section id="languages" className="languages-section">
  <h2>Languages</h2>

  <div className="languages-card">

    <div className="blob"></div>

    <div className="bg">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot">01</div>
          <div className="timeline-content">
            <h3>English</h3>
            <span className="level">Full Professional Proficiency</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot">02</div>
          <div className="timeline-content">
            <h3>Spanish</h3>
            <span className="level">Native</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot">03</div>
          <div className="timeline-content">
            <h3>Catalan</h3>
            <span className="level">Native</span>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot">04</div>
          <div className="timeline-content">
            <h3>French</h3>
            <span className="level">Native</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>


      <section id="contact" className="contact">
        <div className="contact-container">
          <h2>Let's Work Together</h2>
          <p className="contact-subtitle">
            Feel free to reach out for collaborations
          </p>

          <div className="contact-card">

            <div className="contact-item">
              <div className="icon-bounce">
                <FiMapPin />
              </div>
              <p>Barcelona, Spain</p>
            </div>

            <div className="contact-item">
              <div className="icon-bounce">
                <FiMail />
              </div>
              <p>yasminachabou@gmail.com</p>
            </div>

            <div className="contact-social">

              <a
                href="https://www.linkedin.com/in/yasmine-benhammou-achabou-646406190/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin"
              >
                <FaLinkedinIn className="social-icon" />
                <span className="social-text">LinkedIn</span>
              </a>

              <a
                href="https://github.com/Yasujpg"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn github"
              >
                <FaGithub className="social-icon" />
                <span className="social-text">GitHub</span>
              </a>

            </div>

          </div>
        </div>
      </section>

      {showScroll && (
        <button className="scroll-top" onClick={scrollToTop}>
          <span className="scroll-icon">↑</span>
        </button>
      )}

    </>
  )
}

export default App
