import React from 'react';
import { Col } from 'reactstrap';
import TourCard from '../../Shared/TourCard';
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config.js';

const FeaturedTourList = () => {
  const { data: featuredTours, loading, error } = useFetch(`${BASE_URL}/tours/search/getFeaturedTour`);

  // Log data for debugging
  

  if (loading) {
    return <h4>Loading.....</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  if (!featuredTours || featuredTours.length === 0) {
    return <h4>No featured tours found.</h4>;
  }

  return (
    <>
      {featuredTours.map((tour) => (
        <Col lg="3" md='6' sm='6' className="mb-4" key={tour._id || tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;