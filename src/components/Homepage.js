"use client";
import React from "react";
import { Button } from "@chakra-ui/react";
import Image from "next/image";
import styles from "../CSS/home.module.css";

function Homepage() {
  const func = () => {
    alert("That's what she said ;)");
  };

  return (
    <>
      <header className={styles.homeHeader}>
        <Image
          src={require("../../public/SVG/truck.svg")}
          width={"6.688rem"}
          height={"5.188rem"}
          className={styles.homeLogo}
        />
        <Button
          className={styles.headerHomeGITBtn}
          onClick={() => {
            func();
          }}
        >
          Get In Touch
        </Button>
      </header>
      <main className={styles.homeMain}>
        <div className={styles.homeLeftSectionMain}>
          <h1 className={styles.homeMainSlogan}>
            Discover the
            <span style={{ color: "#E23744" }}> Best</span> Food and Drinks
          </h1>
          <p className={styles.homeMainPara}>
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <Button
            className={styles.homeMainBtn}
            onClick={() => {
              func();
            }}
          >
            Explore Now!
          </Button>
        </div>
        <div style={{ position: "relative" }}>
          <Image
            src={require("../../public/SVG/pinkVector.svg")}
            className={styles.pinkVector}
          />
          <Image
            src={require("../../public/assests/pizza.png")}
            className={styles.pizzaImage}
          />
        </div>
      </main>
    </>
  );
}

export default Homepage;
