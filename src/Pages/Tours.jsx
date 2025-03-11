import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../Shared/CommonSection';
import '../Styles/tour.css';
import TourCard from './../Shared/TourCard';
import SearchBar from './../Shared/SearchBar';
import Newsletter from './../Shared/Newsletter';
import TourData from '../assets/data/tours';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(5 / 4); // Fixed 'Math' typo, later replace 5 with actual data count from backend
    setPageCount(pages);
  }, [page]);

  return (
    <>
      <CommonSection title="All Tours" />

      {/* Search Bar Section */}
      <section>
        <Container>
          <Row>
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/* Tour Cards Section */}
      <section className="pt-0">
        <Container>
          <Row>
            {TourData.map((tour) => (
              <Col lg="3" className="mb-4" key={tour.id}>
                <TourCard tour={tour} />
              </Col>
            ))}

            {/* Pagination Section */}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span key={number} onClick={() => setPage(number)}
                  
                  className={page === number ? 'active__page' : ''}>
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Tours;
