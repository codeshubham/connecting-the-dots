import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Services" text="Connecting the dots is an established services provider and we opened our doors since 2017.Our team has many more years of industry experience and is qualified to recommend the right solution for your technical problems. We specialize in working with our clients to provide the right mix of technical services in alliance with their own in-house technical team. We can do as little or as much as you need. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">We pride ourselves on our high quality of service and fast response time</h1>
      <p>Explore the Services</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Electrician" text="We provide electrician facilities through experienced workers." />
      <Feature title="Plumber" text="We also provide plumber facilities through experienced workers." />
      <Feature title="Welder" text="We also provide plumber facilities through experienced workers. " />
      <Feature title="Painter" text="We also provide painting facilities through experienced workers. " />
      <Feature title="Carpenter" text="We also provide carpenter facilities through experienced workers. " />
      <Feature title="Home Appliances Technician" text="We also provide technicians facilities through experienced workers. " />
    </div>
  </div>
);

export default WhatGPT3;
