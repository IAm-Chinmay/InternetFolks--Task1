import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import styles from "../../CSS/articaleCard.module.css";

function ArticleCard({ name }) {
  return (
    <div className={styles.cardMain}>
      <Image
        width={"20.375rem"}
        height={"16.063rem"}
        src={require("../../../public/assests/tomato.png")}
        style={{
          marginTop: "1rem",
        }}
      />
      <div
        style={{
          marginTop: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.313rem",
            fontWeight: 700,
            color: "#0E2368",
          }}
        >
          {name}
        </h1>
        <p
          style={{
            fontSize: "15px",
            width: "18.438rem",
            fontWeight: 600,
            lineHeight: "27px",
            color: "#444957",
            marginTop: "5%",
          }}
        >
          PLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard...
        </p>
      </div>
      <Button
        style={{
          marginRight: "6.25rem",
          width: "7.625rem",
          height: "2.625rem",
          borderRadius: "1.313rem",
          border: "1px solid #424961",
          backgroundColor: "transparent",
          fontSize: "1rem",
          color: "black",
          cursor: "pointer",
          marginRight: "12.813rem",
          marginTop: "2rem",
          marginBottom: "1rem",
        }}
      >
        Read More
      </Button>
    </div>
  );
}

export default ArticleCard;
