import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'telephone number',
    text: '1800-891-9769',
  },
  {
    title: 'Contact number',
    text: '8278808059',
  },
  {
    title: 'Email',
    text: 'connectingthedot.s@outlook.com',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Technical Support</h1>
      <p>Below details are of technical support</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
