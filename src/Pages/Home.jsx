import React from 'react';
import '../Styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroImgvideo from '../assets/images/hero-video.mp4';

import Subtitle from '../Shared/Subtitle';
import WorldImg from '../assets/images/world.png';
import SearchBar from '../Shared/SearchBar';
import Servicelist from '../Services/Servicelist';
import experienceImg from '../assets/images/experience.png';
import FeatureadTourList from '../Components/FeaturedTours/FeatureadTourList';
import MasonaryImageGallery from '../Components/Image-gallery/MasonaryImageGallery';
import Testimonial from '../Components/Testimonial/Testimonial';
import Newsletter from '../Shared/Newsletter';


const Home = () => {
  return (
    <>
      {/* ============= Hero Section Start ============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle Subtitle={'Know Before You Go'} />
                  <img src={WorldImg} alt="World" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, cumque aliquid? 
                  Sapiente voluptatem veritatis necessitatibus vero ipsum vitae eos architecto, 
                  tenetur voluptates, unde quis illum animi? Sunt consectetur beatae nesciunt!
                </p>
              </div>
            </Col>
            
            <Col lg='2'>
            <div className="hero__img-box">
              <img src={heroImg} alt="" />
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box mt-4">
              <video src={heroImgvideo} alt="" controls />
            </div>
            </Col>

            <Col lg='2'>
            <div className="hero__img-box mt-5">
              <img src={heroImg02} alt="" />
            </div>
            </Col>

            <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* ============= Hero Section End ============= */}

      <section>
        <Container>
          <Row>
            <Col lg='3'>
            <h5 className='services_subtitle'>What we serve</h5>
            <h2 className="service_title">We offer our best services</h2>
            </Col>
            <Servicelist/>
          </Row>
        </Container>
      </section>

      {/* ================== featured tour section start */}

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
            <Subtitle Subtitle={'Explore'}/>
            <h2 className="featured__tour-title ">Our featured tours</h2>
            </Col>
            <FeatureadTourList />
          </Row>
        </Container>
      </section>




            {/* ================== featured tour section end */}

            {/* ================== experience section start */}

              <section>
                <Container>
                  <Row>
                    <Col lg='6'>
                    <div className="experience__content">
                     <Subtitle Subtitle={'Experience'} />

                     <h2>With our all experience <br /> We will serve you</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Vitae earum fuga dicta delectus veniam velit modi quas</p>
                     
                                      </div>

                     <div className="counter__wrapper d-flex align-item-center gap-5">
                      <div className="counter__box">
                        <span>12k+</span>
                        <h6>Successful Trip</h6>
                      </div>
                      <div className="counter__box">
                        <span>2k+</span>
                        <h6>Regular clients</h6>
                      </div>
                      <div className="counter__box">
                        <span>15</span>
                        <h6>years experience</h6>
                      </div>
                      </div>                 
                    </Col>
                    <Col lg='6'>
                     <div className="experience__img">
                      <img src={experienceImg} alt="" />
                     </div>
                    </Col>
                  </Row>
                </Container>
              </section>
            {/* ================== featured tour section end ==================*/}

            {/* ================== gallery section start ====================== */}
             <section>
              <Container>
                <Row>
                  <Col lg='12'>
                   <Subtitle Subtitle={'Gallery'} />
                   <h2 className="gallery__title">Visit our customers tour gallery</h2>
                  </Col>
                  <Col lg='12'>
                  <MasonaryImageGallery/>
                  </Col>
                </Row>

              </Container>
             </section>

            {/* ================== gallery section end ====================== */}

            {/* ================== testimonial section start ====================== */}
              <section>
                <Container>
                  <Row>
                    <Col lg=''>
                    <Subtitle Subtitle={'Fans Love'} />
                    <h2 className='testimonial__title'>What our fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                      <Testimonial />
                    </Col>
                  </Row>
                </Container>
              </section>

            {/* ================== testimonial section end ====================== */}

            <Newsletter/>

    </>
  );
};

export default Home;
