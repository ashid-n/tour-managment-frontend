import React from 'react';
import ServiceCard from './ServiceCard';  // ✅ Corrected import
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';
import './Servicecard.css';

// ✅ Service Data Array
const ServiceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

// ✅ Renamed function to prevent conflict
const ServiceList = () => {
  return (
    <>
      {ServiceData.map((item, index) => (
        <Col lg="3" md='6' sm='12' className='mb-4' key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;  // ✅ Corrected export
