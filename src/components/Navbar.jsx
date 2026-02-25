import { useState } from "react"

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">

      <a href="#contact" className="logo-button">
        <div className="logo-text">
          {"  YASMINE   ·  BENHAMMOU  ·"
            .split("")
            .map((char, index) => (
              <span key={index} style={{ "--index": index }}>
                {char}
              </span>
            ))}
        </div>
        <div className="logo-circle">YB</div>
      </a>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
  <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
  <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
  <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
  <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
  <li><a href="#education" onClick={() => setMenuOpen(false)}>Education</a></li>
  <li><a href="#languages" onClick={() => setMenuOpen(false)}>Languages</a></li>
  <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
</ul>

      <div className="nav-right">

        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(prev => !prev)}
          />
          <span className="slider">
            <span className="sun-moon"></span>
            <span className="stars">
              <span className="star star-1"></span>
              <span className="star star-2"></span>
              <span className="star star-3"></span>
            </span>
          </span>
        </label>

        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(prev => !prev)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>
  )
}

export default Navbar
