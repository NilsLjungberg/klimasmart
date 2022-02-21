import React from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Swiper.css";

import img1 from "../../images/slide1.jpeg";
import img2 from "../../images/slide2.jpeg";
import img3 from "../../images/slide3.jpeg";

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 3rem 3rem 3rem;
  line-height: 2.5rem;
  font-size: 1.8rem;

  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 1rem 3rem rgba(47, 47, 51, 0.3);
    cursor: pointer;
  }

  p {
    color: black;
    text-align: center;
    margin-bottom: 2.5rem;
    font-weight: 300;
    font-style: italic;
  }

  span {
    font-weight: 900;
    font-style: normal;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;

    img {
      width: 40%;
      margin: 1.5rem;
    }

    p {
      width: 50%;
      margin: 1.5rem;
    }
  }
`;

const Title = styled.h2`
  font-size: 2.7rem;
  text-align: center;
  line-height: 3.5rem;
  color: rgb(47, 47, 51);
  margin-bottom: 2.5rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;

  span {
    color: #115b4c;
    font-style: italic;
  }

  @media screen and (min-width: 991px) {
    width: 70%;
  }

  @media screen and (min-width: 1180px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

const SwiperImage = () => {
  return (
    <>
      <Div>
        <Title>
          Zusammen mit unseren Kunden entwickeln wir{" "}
          <span>die führende Nachhaltigkeits Plattform</span> für Unternehmen
        </Title>
      </Div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Wrapper>
            <img src={img1} alt="" />
            <p>
              "Daten zu Nachhaltigkeit werden zunehmend wichtiger für uns weil
              Nachhaltigkeit ausschlaggebend für jedes Business ist."
              <br />
              <span>Lisa Herzog</span>
            </p>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <img src={img2} alt="" />
            <p>
              "Unser zentraler Grund zum Start war unnötiger Konsum zu
              reduzieren. Wir sehen dies als der wichtigste Teil vom Puzzle,
              damit wir so nachhaltig wie möglich sein können."
              <br />
              <span>Robert Ulrich</span>
            </p>
          </Wrapper>
        </SwiperSlide>
        <SwiperSlide>
          <Wrapper>
            <img src={img3} alt="" />
            <p>
              "Jedes Unternehmen muss sich mit Nachhaltigkeit früher oder später
              auseinandersetzen. Je früher desto besser! Und auch wir wollen
              natürlich so nachhaltig wie möglich sein."
              <br />
              <span>Yannick Schaffner</span>
            </p>
          </Wrapper>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperImage;
