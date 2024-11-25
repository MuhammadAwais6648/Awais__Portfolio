import React from 'react';

const Stats = () => {
  const statsData = [
    {
      icon: 'icon-pencil-ruler',
      count: 1500,
      title: 'Projects Completed',
    },
    {
      icon: 'icon-users',
      count: 900,
      title: 'Happy Clients',
    },
    {
      icon: 'icon-badge',
      count: 200,
      title: 'Awards Received',
    },
    {
      icon: 'icon-light-bulb',
      count: 120,
      title: 'Crazy Ideas',
    },
    {
      icon: 'icon-cup',
      count: 1500,
      title: 'Coffee Cups',
    },
    {
      icon: 'icon-clock',
      count: 7200,
      title: 'Hours',
    },
  ];

  return (
    <section id="stats" className="count-up">
      <div className="row">
        <div className="col-twelve">
          <div className="block-1-6 block-s-1-3 block-tab-1-2 block-mob-full stats-list">
            {statsData.map((stat, index) => (
              <div className="bgrid stat" key={index}>
                <div className="icon-part">
                  <i className={stat.icon}></i>
                </div>
                <h3 className="stat-count">{stat.count}</h3>
                <h5 className="stat-title">{stat.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
