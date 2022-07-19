import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Services" text="Connecting the dots is an established services provider and we opened our doors since 2017.Our team has many more years of industry experience and is qualified to recommend the right solution for your technical problems. We specialize in working with our clients to provide the right mix of technical services in alliance with their own in-house technical team. We can do as little or as much as you need. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Household services</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Electrician" text="We provide electrician facilities through experienced workers." />
      <Feature title="Plumber" text="We also provide plumber facilities through experienced workers." />
      <Feature title="Welder" text="We also provide plumber facilities through experienced workers. " />
      <Feature title="Painter" text="We also provide painting facilities through experienced workers. " />
      <Feature title="Carpenter" text="We also provide carpenter facilities through experienced workers. " />
      <Feature title="Technical Services" text="We also provide technical services to our customers. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Professional services</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Sales and Marketing Services" text="Sales and marketing services are also provided to the customers. " />
      <Feature title="Promotional and Digital support Service" text="This service includes Promotional and Digital marketing services to the customers. " />
      <Feature title="Training and Development" text="We also provide Training and Development through experienced Developers. " />
      <Feature title="Vocal 4 Local Services" text="Includes Vocal for Local Services. " />
    </div>
  </div>
);

export default WhatGPT3;
