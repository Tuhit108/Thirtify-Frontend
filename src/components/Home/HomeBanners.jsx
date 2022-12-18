import React from 'react';

// images

import './HomeComponentsCSS/HomeBanners.css';
import {BANNER1, BANNER2, BANNER3} from "../../assets";

const HomeBanners = () => {
  return (
    <React.Fragment>
      {/* Slider banner */}
      <div className="slider">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>

          {/* banners */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div href="" className="img-inner" style={{ backgroundImage: `url(${BANNER1})` }}>
                <img alt="Banner" title="Your Title" src="" />
              </div>
            </div>

            <div className="carousel-item">
              <div href="" className="img-inner" style={{ backgroundImage: `url(${BANNER2})` }}>
                <img alt="Banner" title="Your Title" src="" />
              </div>
            </div>

            <div className="carousel-item">
              <div href="" className="img-inner" style={{ backgroundImage: `url(${BANNER3})` }}>
                <img alt="Banner" title="Your Title" src="" />
              </div>
            </div>
          </div>

          {/* Button Control banners */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HomeBanners;
