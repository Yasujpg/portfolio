import { useState } from "react"
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa"

function Skills() {
  const categories = [
    {
      title: "Frontend",
      items: [
        "HTML5",
        "CSS3",
        "Flexbox",
        "Grid",
        "Responsive",
        "SASS",
        "Bootstrap",
        "JavaScript ES6",
        "TypeScript",
        "React"
      ]
    },
    {
      title: "Backend",
      items: ["NodeJS", "Express", "MySQL"]
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "VSCode", "Figma", "Teams", "Slack"]
    },
    {
      title: "Methodologies",
      items: ["Agile", "SCRUM", "UX Design"]
    }
  ]

  const [index, setIndex] = useState(0)

  const prev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? categories.length - 1 : prevIndex - 1
    )
  }

  const next = () => {
    setIndex((prevIndex) =>
      (prevIndex + 1) % categories.length
    )
  }

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">Technical Skills</h2>
<p className="skills-subtitle">
  Technologies and tools I work with
</p>

      <div className="carousel-wrapper">

        <button className="arrow left" onClick={prev}>
          <FaRegHandPointLeft />
        </button>

        <div className="carousel">
          {categories.map((category, i) => {
            let position = "next"

            if (i === index) {
              position = "active"
            } else if (
              i === index - 1 ||
              (index === 0 && i === categories.length - 1)
            ) {
              position = "prev"
            }

            return (
              <div key={i} className={`card ${position}`}>
                <h3>{category.title}</h3>
                <ul>
                  {category.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <button className="arrow right" onClick={next}>
          <FaRegHandPointRight />
        </button>

      </div>
    </section>
  )
}

export default Skills
