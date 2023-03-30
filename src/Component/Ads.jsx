import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// import "./styles.css";

// import required modules
// import { Pagination } from "swiper";
import "../Styles/ads.css";
// import Carousel from "react-bootstrap/Carousel";/
import pic1 from "../Img/55.jpeg";
import pic2 from "../Img/33.jpeg";
import pic3 from "../Img/66.jpeg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Ads = () => {
  return (
    <div>
      <h6 className="news">News</h6>
      <div className="ads">
        <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img src={pic1} className="car_img" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={pic2} className="car_img" alt="Image 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={pic3} className="car_img" alt="Image 2" />
          </SplideSlide>
        </Splide>
        {/* <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={pic1} className="car_img" alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} className="car_img" alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} className="car_img" alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic2} className="car_img" alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic3} className="car_img" alt="Image 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={pic1} className="car_img" alt="Image 1" />
          </SwiperSlide>
        </Swiper> */}
        {/* <Splide aria-label="My Favorite Images">
          <SplideSlide>
            <img src={pic1} className="car_img" alt="Image 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={pic2} className="car_img" alt="Image 2" />
          </SplideSlide>
        </Splide> */}
      </div>
    </div>
  );
};

export default Ads;
