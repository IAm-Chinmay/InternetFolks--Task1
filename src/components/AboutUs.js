import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import styles from "../CSS/about.module.css";

function AboutUs() {
  return (
    <div className={styles.mainAbout}>
      <div>
        <Image
          src={require("../../public/assests/about.png")}
          width={"24rem"}
          height={"29.25rem"}
          className={styles.imageAbout}
        />
      </div>
      <div className={styles.aboutInfoMain}>
        <h1 className={styles.aboutHead}>About Us</h1>
        <p className={styles.aboutPara}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <Button className={styles.aboutBtn}>Read More</Button>
      </div>
    </div>
  );
}

export default AboutUs;
