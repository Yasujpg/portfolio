function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">

      <div className="logo-button">
        <div className="logo-text">
          {" YASMINE   ·  BENHAMMOU  · " .split("").map((char, index) => (
            <span key={index} style={{ "--index": index }}>
              {char}
            </span>
          ))}
        </div>
        <div className="logo-circle">YB</div>
      </div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

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


    </nav>
  )
}

export default Navbar
