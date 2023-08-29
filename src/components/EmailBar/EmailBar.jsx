import React from "react";
import styles from "./EmailBar.module.css";
import Chip from "@mui/material/Chip";
import EmailIcon from "../../assets/EmailIcon.png";

const EmailBar = () => {
  return (
    <div className={styles.EmailWrapper}>
        <img src={EmailIcon} alt="EmailIcon" />
        <input type="text" placeholder="Enter your eamil address" />
        <Chip className={styles.pill} label="Let's Talk!" />
    </div>
  );
};

export default EmailBar;
