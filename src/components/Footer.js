import React from "react";
import Image from "next/image";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "5rem",
        marginBottom: "3rem",
        padding: "1rem",
      }}
    >
      <div style={styles.section}>
        <Image
          src={require("../../public/SVG/truck.svg")}
          width={160}
          height={120}
          alt="Logo"
        />
      </div>

      <div style={styles.section}>
        <h1 style={styles.title}>Contact Us</h1>
        <p style={styles.text}>
          Lorem Ipsum Pvt Ltd. 5/1, Magalton Road, Phartosh Gate near YTM
          Market, XYZ-343434
        </p>
        <p style={styles.text}>example2020@gmail.com</p>
        <p style={styles.text}>904 443-0343</p>
      </div>

      <div style={styles.section}>
        <h1 style={styles.title}>More</h1>
        <p style={styles.text}>About Us</p>
        <p style={styles.text}>Products</p>
        <p style={styles.text}>Career</p>
        <p style={styles.text}>Contact Us</p>
      </div>

      <div style={styles.socialSection}>
        <h1 style={styles.title}>Social Links</h1>
        <div style={styles.socialLinks}>
          <FaInstagram style={styles.icon} />
          <FaTwitter style={styles.icon} />
          <FaFacebook style={styles.icon} />
        </div>
        <h1 style={styles.footerText}>&#169; 2022 Food Truck Example</h1>
      </div>
    </div>
  );
}

const styles = {
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2rem",
    padding: "0 1rem",
    textAlign: "center",
    minWidth: "200px",
  },
  title: {
    color: "#0E2368",
    fontWeight: 600,
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  text: {
    fontWeight: 400,
    fontSize: "1rem",
    color: "#646874",
    marginTop: "0.5rem",
  },
  socialSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "2rem",
    textAlign: "center",
    minWidth: "200px",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "1rem",
  },
  icon: {
    color: "#0E2368",
    width: "21px",
    height: "21px",
  },
  footerText: {
    fontSize: "0.9rem",
    color: " #828B9C",
    marginTop: "1rem",
  },
};

export default Footer;
