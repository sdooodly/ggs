import React from 'react';
import HeroCanvas from './components/HeroCanvas';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeroCanvas />
        <h1>Gaya Mo</h1>
        <h2>a full stack developer dancing with digits</h2>
        <p>A weaver of digital dreams, I craft experiences where logic meets artistry. From the whispers of an idea to a symphony of code, I bring visions to vibrant life.</p>
      </header>
      <main>
        <section id="projects">
          <h2>Projects</h2>
          <Projects />
        </section>
        <section id="about">
          <h2>About Me</h2>
          <p>Digital Architect</p>
          <p>With a keen eye for innovation and a dedication to elegant solutions, I translate complex challenges into intuitive digital experiences. My expertise spans the full development lifecycle, ensuring robust and scalable applications. I am passionate about crafting impactful technology that empowers and inspires.</p>
        </section>
        <section id="tech-stack">
          <h2>Tech Stack</h2>
          <TechStack />
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <a href="mailto:hgsaudhsaij@gsfjgh.com">hgsaudhsaij@gsfjgh.com</a>
          <a href="http://sfdjihd.linikedin.com">sfdjihd.linikedin.com</a>
          <a href="https://github.com/sdooodly?tab=repositories">Github</a>
          <a href="#">Placeholder</a>
        </section>
      </main>
    </div>
  );
}

export default App;
