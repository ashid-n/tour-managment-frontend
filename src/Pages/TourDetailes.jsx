import React from 'react';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import calculateAvgRating from '../utils/avgRating';
import '../Styles/tour-detailes.css';
import avatar from '../assets/images/avatar.jpg';

const TourDetails = () => {
  const { id } = useParams();
  const tour = tourData.find(tour => tour.id === id);

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  const { address, photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // format date
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
                    <span><i className="ri-money-dollar-circle-line"></i> {price} / per person</span>
                    <span><i className="ri-map-pin-time-line"></i> {distance} km</span>
                    <span><i className="ri-group-line"></i> {maxGroupSize} people</span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* =============== tour reviews section ============= */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>

                  <Form>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span>1<i className="ri-star-s-fill"></i></span>
                      <span>2<i className="ri-star-s-fill"></i></span>
                      <span>3<i className="ri-star-s-fill"></i></span>
                      <span>4<i className="ri-star-s-fill"></i></span>
                      <span>5<i className="ri-star-s-fill"></i></span>
                    </div>

                    <div className="review__input">
                      <input type="text" placeholder='share your thoughts'/>
                      <button className="btn primary__btn text-white" type='submit'>
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className='user__reviews'>
                    {reviews?.map(review =>(
                      <div className="review__item">
                        <img src={avatar} alt="" />

                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>{review.username || 'vipin'}</h5>
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
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;