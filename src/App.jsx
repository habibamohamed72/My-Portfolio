
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav>
        <h2>H.</h2>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <p>Hello, I'm</p>
        <h1>Habiba Mohamed</h1>
        <h3>Computer Science Student</h3>
        <p className="description">
          I'm learning web development and love creating
          simple and beautiful websites.
        </p>
        <a className="btn" href="#contact">Contact Me</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I'm a Computer Science student interested in
          web development, programming, and learning
          new technologies.
        </p>
      </section>

      <section id="skills" className="section">
        <h2>My Skills</h2>
        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let's Connect!</h2>
        <p>Feel free to contact me.</p>
        <a href="mailto:your@email.com">Send Me an Email</a>
      </section>

      <footer>
        <p>© 2026 Habiba Mohamed</p>
      </footer>
    </div>
  )
}

export default App
