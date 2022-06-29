import React from 'react';
import Feature from '../../components/feature/Feature';
import './aboutus.css';

const featuresData = [
  {
    title: 'Kamlesh Sharma',
    text: 'provides advice, support and resources to individuals and families to help them solve their problems. She  works with specific groups of individuals, including children, the elderly and families in crisis, and help them to solve the problems they are facing. She has very vast experience in social work and welfare for society. She is the founding owner of Connecting the dots... ',
  },
  {
    title: 'Suresh Sharma',
    text: 'is a key part of a management team and oversees high-level HR duties, such as attracting talent and setting training standards and hiring procedures. They also analyze and improve organizational processes, and work to improve quality, productivity, and efficiency of the Connecting the dots... ',
  },
  {
    title: 'Pallavi Sood',
    text: 'is a finance professional who provides consulting and advice about finances. She helps Connecting the dots... to reach their financial goals sooner by providing their strategies and ways to create more wealth, reduce costs, or eliminate debts.',
  },
  {
    title: 'Sachin Sharma',
    text: 'is a sales and marketing consultant and responsible for researching and developing marketing opportunities and planning and implementing new sales plans.  He is also manage both the marketing and the sales teams and will perform consulting duties related to marketing and sales to meet the companys operations goals. He is also a founder of Connecting the dots...',
  },
];

const Aboutus = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Team</h1>
      <p>Below details are of team members</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Aboutus;
