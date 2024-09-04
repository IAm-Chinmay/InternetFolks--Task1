"use client";
import React, { useState, useRef } from "react";
import ArticleCard from "./SubComponents/ArticleCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styles from "../CSS/articles.module.css";

function Articles() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 6;
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex + 1);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={styles.mainArticles}>
      <h1 className={styles.latestArtiHead}>Latest Articles</h1>

      <Slider {...settings} ref={sliderRef}>
        <ArticleCard name="abc" />
        <ArticleCard name="Grilled Tomatoes at Home" />
        <ArticleCard name="Grilled Tomatoes at Home" />
        <ArticleCard name="Not Grilled Tomatoes at Home" />
        <ArticleCard name="Grilled Tomatoes at Home" />
        <ArticleCard name="Grilled Tomatoes at Home" />
      </Slider>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
          style={{
            backgroundColor: "transparent",
            width: "28px",
            height: "29px",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 800,
          }}
        >
          <ChevronLeftIcon />
        </button>
        <span style={{ margin: "0 1rem" }}>
          {currentSlide}/{totalSlides}
        </span>
        <button
          style={{
            backgroundColor: "transparent",
            width: "28px",
            height: "29px",
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: 800,
          }}
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

export default Articles;
