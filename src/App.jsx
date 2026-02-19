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
              <h3>Customer Service Agent</h3>
              <p>Concentrix | Jul 2023 - Jul 2025</p>
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
              <p>Sosmatic | Oct 2020 - Mar 2023</p>
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
