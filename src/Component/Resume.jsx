import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>
          <p className="lead">
            I am a ReactJS developer specializing in building responsive, high-performance web applications. I have a collaborative approach to front-end development, which enables me to create user-centric applications.
          </p>
        </div>
      </div>

      {/* Work Experience */}
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>
        <div className="col-twelve">
          <div className="timeline-wrap">
            {/* Hypertext Solution */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>Frontend / React.js Developer</h3>
                <p>Present (Islamabad, Pakistan)</p>
              </div>
              <div className="timeline-content">
                <h4>Hypertext Solution</h4>
                <p>
                  Collaborated with frontend and backend development teams to integrate APIs seamlessly within React.js applications.
                  Designed and implemented scalable API integration solutions, ensuring data consistency and optimized performance.
                  Developed reusable, modular code components for API handling and data fetching.
                  Transformed Figma designs into React components, ensuring high design fidelity and cross-browser compatibility.
                  Worked closely with designers to create user-friendly interfaces.
                </p>
              </div>
            </div>

            {/* Lala Group of Companies */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>Frontend / React.js Developer</h3>
                <p>11/2022 - 11/2023 (Islamabad, Pakistan)</p>
              </div>
              <div className="timeline-content">
                <h4>Lala Group of Companies</h4>
                <p>
                  Developed and maintained a travel planning website using React.js, integrating with RESTful APIs for seamless user experiences.
                  Worked with a cross-functional team to design and implement dynamic UI components, improving website performance and user engagement.
                </p>
              </div>
            </div>

            {/* HostBreak.com */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>NOC Engineer</h3>
                <p>01/2024 - 08/2024</p>
              </div>
              <div className="timeline-content">
                <h4>HostBreak.com</h4>
                <p>
                  Managed and maintained technology systems in sports venues, ensuring reliable IT infrastructure and broadcast systems.
                  Supported live event operations, fan engagement platforms, and secured data handling. Specialized in cloud solutions and networking for seamless event and system performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Education</h2>
        </div>
        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-briefcase"></i>
              </div>
              <div className="timeline-header">
                <h3>Master's in Computer Science</h3>
                <p>01/2020 - 04/2022 (Islamabad, Pakistan)</p>
              </div>
              <div className="timeline-content">
                <h4>NUML National University of Modern Languages</h4>
                <p>Specialized in computer science with a focus on front-end technologies and web development.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      {/* <div className="row">
        <div className="col-twelve resume-header">
          <h2>Skills</h2>
        </div>
        <div className="col-twelve">
          <ul className="skill-list">
            <li>React.js, Redux, React Hooks</li>
            <li>JavaScript (ES6+), HTML5, CSS3</li>
            <li>Git, Github</li>
            <li>Bootstrap, Material UI</li>
            <li>API Integration (RESTful, Postman)</li>
            <li>Figma, UI/UX Design</li>
          </ul>
        </div>
      </div> */}

      {/* Projects */}
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Projects</h2>
        </div>
        <div className="col-twelve">
          <div className="timeline-wrap">
            {/* Travel Planning Websites */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-cogs"></i>
              </div>
              <div className="timeline-header">
                <h3>Travel Planning Websites</h3>
                <p>11/2022 - 11/2023</p>
              </div>
              <div className="timeline-content">
                <h4>Tripplannerpk.com, Tripplanner.ae, Lalaintltravel.pk</h4>
                <p>
                  Developed and maintained a travel planning website using React.js, integrating RESTful APIs to ensure a seamless user experience.
                  Worked with a cross-functional team to enhance website performance and user engagement.
                </p>
              </div>
            </div>

            {/* Point of Sale (POS) */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-cogs"></i>
              </div>
              <div className="timeline-header">
                <h3>Point of Sale (POS)</h3>
                <p>11/2022 - 11/2023</p>
              </div>
              <div className="timeline-content">
                <h4>Modern POS System</h4>
                <p>
                  Developed an interactive POS system using React.js, ensuring dynamic UI components and efficient state management for seamless user interactions.
                </p>
              </div>
            </div>

            {/* Mobile Umrah Furas */}
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-cogs"></i>
              </div>
              <div className="timeline-header">
                <h3>Mobile Umrah Furas</h3>
                <p>03/2023 - 05/2023</p>
              </div>
              <div className="timeline-content">
                <h4>Mobile-based Travel Planning Platform</h4>
                <p>
                  Developed a travel planning platform using React.js, creating responsive UIs and integrating RESTful APIs to improve user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
