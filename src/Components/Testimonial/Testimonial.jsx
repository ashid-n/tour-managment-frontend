import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg';
import ava02 from '../../assets/images/ava-2.jpg';
import ava03 from '../../assets/images/ava-3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,


    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          deserunt aperiam consectetur aspernatur saepe adipisci ipsam nulla.
          Adipisci, id fugit sapiente, modi unde sequi iure laudantium obcaecati
          aspernatur sit perspiciatis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava01}
            alt="John Doe"
            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
          />
          <div>
            <h5 className="mb-0">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          deserunt aperiam consectetur aspernatur saepe adipisci ipsam nulla.
          Adipisci, id fugit sapiente, modi unde sequi iure laudantium obcaecati
          aspernatur sit perspiciatis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava02}
            alt="Lia Franklin"
            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
          />
          <div>
            <h5 className="mb-0">Lia Franklin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          deserunt aperiam consectetur aspernatur saepe adipisci ipsam nulla.
          Adipisci, id fugit sapiente, modi unde sequi iure laudantium obcaecati
          aspernatur sit perspiciatis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava03}
            alt="John Doe"
            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
          />
          <div>
            <h5 className="mb-0">John Doe</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          deserunt aperiam consectetur aspernatur saepe adipisci ipsam nulla.
          Adipisci, id fugit sapiente, modi unde sequi iure laudantium obcaecati
          aspernatur sit perspiciatis.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img
            src={ava02}
            alt="Lia Franklin"
            style={{ width: '80px', height: '80px', borderRadius: '50%' }}
          />
          <div>
            <h5 className="mb-0">Lia Franklin</h5>
            <p>Customer</p>
          </div>
        </div>
      </div>
      
    </Slider>
  );
};

export default Testimonial;