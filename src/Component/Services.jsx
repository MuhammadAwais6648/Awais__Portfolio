import React from 'react';

const Services = () => {
  return (
    <section id="services">
      <div className="overlay"></div>

      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Services</h5>
          <h1>What Can I Do For You?</h1>
          <p className="lead">
            I specialize in creating cutting-edge web applications, intuitive UI/UX designs, and cloud-based solutions to help you achieve your goals. Here's what I can offer:
          </p>
        </div>
      </div>

      <div className="row services-content">
        <div id="owl-slider" className="owl-carousel services-list">
          {[
            {
              icon: 'icon-earth',
              title: 'Web Design & Development',
              description:
                'I build responsive, user-friendly web applications using the latest technologies like React.js, HTML5, and CSS3. Whether you need a landing page, a full-stack application, or a custom web solution, I can deliver high-performance websites tailored to your needs.',
            },
            {
              icon: 'icon-window',
              title: 'Cloud Solutions & AWS Expertise',
              description:
                'With in-depth experience in AWS, I provide cloud-based solutions including infrastructure management, serverless architecture, and CI/CD pipeline implementation. I ensure high availability, scalability, and cost optimization for your cloud resources.',
            },
            {
              icon: 'icon-paint-brush',
              title: 'UI/UX Design',
              description:
                'I craft intuitive, engaging user interfaces with a focus on user experience. From wireframes to high-fidelity mockups, I ensure that your application is not only visually appealing but also easy to navigate and use.',
            },
            {
              icon: 'icon-toggles',
              title: 'Branding & Visual Identity',
              description:
                'I help businesses develop a cohesive brand identity through logo design, color schemes, and typography. Whether you’re starting a new venture or rebranding, I create designs that resonate with your target audience.',
            },
            {
              icon: 'icon-image',
              title: 'Graphics Design',
              description:
                'From marketing materials to digital assets, I design visuals that effectively communicate your brand message. I specialize in creating custom graphics for web, print, and social media.',
            },
            {
              icon: 'icon-chat',
              title: 'Consultancy & Training',
              description:
                'I provide expert consultancy and training services in areas like cloud infrastructure, React development, and DevOps practices. I can help streamline your development process and teach your team best practices for web technologies and cloud operations.',
            },
          ].map((service, index) => (
            <div className="service" key={index}>
              <span className="icon">
                <i className={service.icon}></i>
              </span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="desc">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
