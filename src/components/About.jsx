import Yasu from "../assets/Yasu.png"

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-card">

        <div className="about-image-wrapper">
          <img src={Yasu} alt="Yasmine Benhammou" className="about-image" />
        </div>

        <div className="about-content">
          <h2 className="about-title">About Me</h2>

          <p className="about-text">
            Junior Front-End Developer who has completed a Full-Stack Web
            Development bootcamp. With a background in art, design, and music,
            I bring a strong creative perspective to user experience and
            interface design.
          </p>

          <p className="about-text">
            My previous experience in customer service strengthened my
            communication, teamwork, and problem-solving skills. I am
            passionate about creating elegant, user-centered digital
            experiences with clean and modern design.
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
