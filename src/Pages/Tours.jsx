import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CommonSection from '../Shared/CommonSection';
import '../Styles/tour.css';
import TourCard from './../Shared/TourCard';
import SearchBar from './../Shared/SearchBar';
import Newsletter from './../Shared/Newsletter';
import useFetch from '../hooks/useFetch';
import { BASE_URL } from '../utils/config';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  const { data: tours, loading, error } = useFetch(`${BASE_URL}/tours?page=${page}`);
  const { data: toursCount } = useFetch(`${BASE_URL}/tours/search/getTourCount`);

  useEffect(() => {
    if (toursCount) {
      const pages = Math.ceil(toursCount / 4); // Displaying 4 tours per page
      setPageCount(pages);
      window.scrollTo(0, 0);
    }
  }, [toursCount, toursCount , tours]);

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
          {loading && <h4 className='text-center pt-5'>Loading...</h4>}
          {error && <h4 className='text-center pt-5'>{error}</h4>}

          {!loading && !error && tours && tours.length > 0 && (
            <Row>
              {tours.map((tour) => (
                <Col lg="3" md='6' sm='6' className="mb-4" key={tour._id || tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))}

              {/* Pagination Section */}
              <Col lg="12">
                <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                  {[...Array(pageCount).keys()].map((number) => (
                    <span 
                      key={number} 
                      onClick={() => setPage(number)}
                      className={page === number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
              </Col>
            </Row>
          )}
          
          {!loading && !error && (!tours || tours.length === 0) && (
            <h4 className='text-center pt-5'>No tours found</h4>
          )}
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Tours;