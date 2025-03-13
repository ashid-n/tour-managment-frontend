import React, { useState } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem } from "reactstrap";

import { useNavigate } from 'react-router-dom';

const Booking = ({ tour, avgRating }) => {
  const { price, reviews } = tour;

  const Navigate = useNavigate();

  const [credential, setCredential] = useState({
    userId: '01', // Later it will be dynamic
    userEmail: 'example@gmail.com',
    fullName: '',
    phone: '',
    guestSize: 1,
    bookAt: ''
  });

  const handleChange = (e) => {
    setCredential((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const servicefee = 10
  const totalAmount = Number(price) * Number(credential.guestSize) + Number(servicefee)

  // Send data to the server
  const handleClick = (e) => {
    e.preventDefault();
    
    Navigate('/thank-you')
  };

  return (
    <div className="booking">
      <div className="booking_top d-flex align-items-center justify-content-between">
        <h3>${price} <span>/per person</span></h3>
        <span className='tour__rating d-flex align-items-center'>
          <i className="ri-star-fill"></i>
          {avgRating > 0 ? avgRating : 'No Rating'} ({reviews?.length || 0})
        </span>
      </div>

      {/* Booking Form */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className='booking__info-form' onSubmit={handleClick}>
          <FormGroup>
            <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
          </FormGroup>
          <FormGroup>
            <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
          </FormGroup>
          <FormGroup className='d-flex align-items-center gap-3'>
            <input type="date" id='bookAt' required onChange={handleChange} />
            <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
          </FormGroup>
        </Form>
      </div>

      {/* Booking Bottom Section */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className='border-0 px-0 d-flex justify-content-between'>
            <h5 className='d-flex align-items-center gap-1'>${price} <i className="ri-close-line"></i> 1 person</h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 d-flex justify-content-between'>
            <h5>Service Charge</h5>
            <span>${servicefee}</span>
          </ListGroupItem>
          <ListGroupItem className='border-0 px-0 total d-flex justify-content-between'>
            <h5>Total</h5>
            <span>${totalAmount}</span>
          </ListGroupItem>
        </ListGroup>
        <button className='btn primary__btn w-100 mt-4' onClick={handleClick}>Book Now</button>
      </div>
    </div>
  );
};

export default Booking;
