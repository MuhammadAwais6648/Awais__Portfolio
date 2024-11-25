import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>

          <div className="intro-info">
            <img src="images/profile-pic.jpg" alt="Profile Picture" />
            <p className="lead">
              I am Muhammad Awais, a passionate Frontend Developer with a strong focus on React.js. I specialize in building responsive, high-performance web applications. I thrive in collaborative environments and am dedicated to improving the user experience through efficient, reliable code.
            </p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>Profile</h3>
          <p>
            I am a Frontend/React.js Developer with expertise in designing and building interactive web applications. I have a solid foundation in JavaScript, HTML5, CSS3, and modern frontend libraries like React.js and Redux. My focus is on creating seamless, scalable applications while collaborating effectively with backend teams to integrate APIs.
          </p>

          <ul className="info-list">
            <li>
              <strong>Fullname:</strong>
              <span>Muhammad Awais</span>
            </li>
            <li>
              <strong>Birth Date:</strong>
              <span>Not Provided</span>
            </li>
            <li>
              <strong>Job:</strong>
              <span>Frontend / React.js Developer</span>
            </li>
            <li>
              <strong>Website:</strong>
              <span>www.yourwebsite.com</span>
            </li>
            <li>
              <strong>Email:</strong>
              <span>mawais579810@gmail.com</span>
            </li>
            <li>
              <strong>Location:</strong>
              <span>Islamabad, Pakistan</span>
            </li>
          </ul>
        </div>

        <div className="col-six tab-full">
          <h3>Skills</h3>
          <p>
            I specialize in frontend development using modern JavaScript frameworks and libraries. Below are some of my key technical skills.
          </p>

          <ul className="skill-bars">
            <li>
              <div className="progress percent90">
                <span>90%</span>
              </div>
              <strong>React.js</strong>
            </li>
            <li>
              <div className="progress percent85">
                <span>85%</span>
              </div>
              <strong>HTML5</strong>
            </li>
            <li>
              <div className="progress percent80">
                <span>80%</span>
              </div>
              <strong>CSS3</strong>
            </li>
            <li>
              <div className="progress percent75">
                <span>75%</span>
              </div>
              <strong>JavaScript (ES6+)</strong>
            </li>
            <li>
              <div className="progress percent70">
                <span>70%</span>
              </div>
              <strong>Redux</strong>
            </li>
            <li>
              <div className="progress percent65">
                <span>65%</span>
              </div>
              <strong>RESTful APIs</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a href="#contact" title="Hire Me" className="button stroke smoothscroll">
            Hire Me
          </a>
          <a href="#" title="Download CV" className="button button-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
