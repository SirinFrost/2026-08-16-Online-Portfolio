import './About.css'

export function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <p className="section-label">About</p>
        <h2 className="section-title">
          Teaching, leading, and building with <span className="highlight">curiosity</span>
        </h2>
        <div className="about-grid">
          <p className="about-copy">
            From robotics camps to Python classrooms and badminton courts, I&apos;ve spent years
            working with students in fast-moving environments. I&apos;m comfortable leading teams,
            creating lesson content, and keeping people safe while things stay organized.
          </p>
          <div className="about-columns">
            <article className="about-block">
              <h3>What I do well</h3>
              <ul>
                <li>Explain technical ideas clearly to learners</li>
                <li>Lead groups and keep operations running smoothly</li>
                <li>Stay calm under pressure and document what matters</li>
              </ul>
            </article>
            <article className="about-block">
              <h3>What I&apos;m looking for</h3>
              <ul>
                <li>Co-op and internship opportunities</li>
                <li>Teaching, tutoring, and youth program roles</li>
                <li>Projects where I can grow in software and leadership</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
