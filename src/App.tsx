import { About } from './components/About'
import { CodingBackground } from './components/CodingBackground'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Projects } from './components/Projects'
import { SkillsInterests } from './components/SkillsInterests'

function App() {
  return (
    <div className="page">
      <CodingBackground />
      <Nav />
      <main className="page-main">
        <Hero />
        <Experience />
        <Projects />
        <SkillsInterests />
        <About />
        <Footer />
      </main>
    </div>
  )
}

export default App
