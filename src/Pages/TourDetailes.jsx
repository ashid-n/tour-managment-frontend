import React, { useEffect, useRef, useState , useContext } from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import '../Styles/tour-detailes.css';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../Components/Booking/Booking';
import Newsletter from '../Shared/Newsletter';
import useFetch from './../hooks/useFetch';
import { BASE_URL } from './../utils/config';
import {AuthContext} from './../Context/AuthContext'

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef('');
  const [tourRating, setTourRating] = useState(null);
  const {user} = useContext(AuthContext);

  // Fetch data from database
  const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [tour]);

  // Submit request to the server
  const submitHandler = async e => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;


    try {

      
    if(!user || user === undefined || user === null)
      {
        alert('Please sign in')
      }

      const reviewObj = {
        username: user?.username,
        reviewText,
        rating: tourRating
      }

      const res = await fetch(`${BASE_URL}/review/${id}`,{
        method: 'post',
        headers:{
          'content-type':'application/json'
        },
        credentials:'include',
        body:JSON.stringify(reviewObj)
      })


      const result = await res.json();
      if(!res.ok) {
        return alert(result.message);
      }
    
      alert(result.message)
    } catch (err) {
      alert(err.message);
    }


    // Later will call our API
  };

  if (loading) {
    return <h4 className='text-center pt-5'>Loading...</h4>;
  }

  if (error) {
    return <h4 className='text-center pt-5'>{error}</h4>;
  }

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  const { address, photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Format date
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt={title} />
                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="d-flex align-items-center gap-5">
                    <span className='tour__rating d-flex align-items-center gap-1'>
                      <i className="ri-star-fill" style={{ 'color': 'var(--secondary-color)' }}></i> 
                      {avgRating === 0 ? null : avgRating} 
                      {totalRating === 0 ? 'Not rated' : (  
                        <span>({reviews?.length})</span>
                      )}
                    </span>
                    <span>
                      <i className="ri-map-pin-user-fill"></i> {address}
                    </span>
                  </div>

                  <div className="tour__extra-detailes">
                    <span><i className="ri-map-pin-2-line"></i> {city}</span>
                    <span><i className="ri-money-dollar-circle-line"></i> ${price} / per person</span>
                    <span><i className="ri-map-pin-time-line"></i> {distance} km</span>
                    <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* =============== tour reviews section ============= */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>1<i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(2)}>2<i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(3)}>3<i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(4)}>4<i className="ri-star-s-fill"></i></span>
                      <span onClick={() => setTourRating(5)}>5<i className="ri-star-s-fill"></i></span>
                    </div>

                    <div className="review__input">
                      <input type="text" ref={reviewMsgRef} placeholder='share your thoughts' required />
                      <button className="btn primary__btn text-white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {reviews?.map((review, index) => (
                      <div className="review__item" key={index}>
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username}</h5>
                              <p>{new Date(review.createdAt || '01-18-2023').toLocaleDateString('en-US', options)}</p>
                            </div>
                            <span className="d-flex align-items-center">
                              {review.rating || 5}<i className="ri-star-fill ms-1"></i>
                            </span>
                          </div>
                          <h6>{review.reviewText || 'Amazing tour'}</h6>
                        </div>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* =============== tour reviews section end ============= */}
              </div>
            </Col>

            <Col lg='4'>
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default TourDetails;