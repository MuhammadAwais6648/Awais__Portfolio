import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      imgSrc: 'images/portfolio/liberty.jpg',
      modalImgSrc: 'images/portfolio/modals/m-liberty.jpg',
      title: 'Liberty',
      category: 'Graphic Design',
      description:
        'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
    {
      id: 2,
      imgSrc: 'images/portfolio/shutterbug.jpg',
      modalImgSrc: 'images/portfolio/modals/m-shutterbug.jpg',
      title: 'Shutterbug',
      category: 'Web Design',
      description:
        'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
    {
      id: 3,
      imgSrc: 'images/portfolio/clouds.jpg',
      modalImgSrc: 'images/portfolio/modals/m-clouds.jpg',
      title: 'Clouds',
      category: 'Web Design',
      description:
        'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
    {
      id: 4,
      imgSrc: 'images/portfolio/beetle.jpg',
      modalImgSrc: 'images/portfolio/modals/m-beetle.jpg',
      title: 'Beetle',
      category: 'Branding',
      description:
        'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
    {
      id: 5,
      imgSrc: 'images/portfolio/lighthouse.jpg',
      modalImgSrc: 'images/portfolio/modals/m-lighthouse.jpg',
      title: 'Lighthouse',
      category: 'Web Development',
      description:
        'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
    {
      id: 6,
      imgSrc: 'images/portfolio/salad.jpg',
      modalImgSrc: 'images/portfolio/modals/m-salad.jpg',
      title: 'Salad',
      category: 'Branding',
      description:
        'Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.',
    },
  ];

  // Responsive settings for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // number of items to slide at once
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // number of items to slide at once
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // number of items to slide at once
    },
  };

  return (
    <section id="portfolio">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Portfolio</h5>
          <h1>Check Out Some of My Works.</h1>
          <p className="lead">
            Below are some of the projects I have worked on, showcasing my expertise in React development and UI/UX design.
          </p>
        </div>
      </div>

      <div className="row portfolio-content">
        <div className="col-twelve">
          {/* React Multi Carousel */}
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={['tablet', 'mobile']}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {portfolioItems.map((item) => (
              <div key={item.id} className="portfolio-item">
                <div className="item-wrap">
                  <img src={item.imgSrc} alt={item.title} />
                  <a href={`#modal-${item.id}`} className="overlay">
                    <div className="folio-item-table">
                      <div className="folio-item-cell">
                        <h3 className="folio-title">{item.title}</h3>
                        <span className="folio-types">{item.category}</span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Modal Popups */}
          {portfolioItems.map((item) => (
            <div key={item.id} id={`modal-${item.id}`} className="popup-modal slider mfp-hide">
              <div className="media">
                <img src={item.modalImgSrc} alt={item.title} />
              </div>
              <div className="description-box">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <div className="categories">{item.category}</div>
              </div>
              <div className="link-box">
                <a href="http://www.behance.net">Details</a>
                <a href="#" className="popup-modal-dismiss">
                  Close
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
