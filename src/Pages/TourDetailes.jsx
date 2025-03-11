import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams } from 'react-router-dom';
import tourData from '../assets/data/tours';
import '../Styles/tour-detailes.css';
import calculateAvgRating from '../utils/avgRating';

const TourDetails = () => {
  

  // This is a static data, later we will call our API and load data from database
  const { id } = useParams();
  const tour = tourData.find(tour => tour.id === parseInt(id)); // Convert id to a number

  console.log("Tour Data:", tourData);
console.log("ID from URL:", id);

  if (!tour) {
    return <h2>Tour not found</h2>;
  }

  const { photo, title, desc, price, reviews, city, distance, maxGroupSize } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);

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
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i className="ri-star-line"></i> {avgRating === 0 ? null : avgRating} 
                      {totalRating === 0 ? 'Not rated' : <span>({reviews.length})</span>}
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default TourDetails;