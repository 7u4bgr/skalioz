import React from "react";
import styles from "./index.module.css";
import Yusif from "../../assets/images/yusifprofil.png";
import YusifDiplom from '../../assets/images/diplom.png'
const Certificates = () => {
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.leftside}>
          <div className={styles.header}>
            <h2>About us</h2>
          </div>
          <div className={styles.profilpicture}>
            <img src={Yusif} alt="" />
          </div>
          <div className={styles.experience}>
            <h2>Təcrübə</h2>
            <p>
              Faced difficulties in adapting to market changes? Are you looking
              to expand your business but unsure about the best strategies to
              pursue? We are here for you. Besides providing your company with a
              remote team based on your project needs, we also help you evaluate
              performance and choose the right strategy to follow.
            </p>
          </div>
        </div>
        <div className={styles.rightside}>
        <div className={styles.education}>
            <h2>Təhsil</h2>
            <p>
              Faced difficulties in adapting to market changes? Are you looking
              to expand your business but unsure about the best strategies to
              pursue? We are here for you. Besides providing your company with a
              remote team based on your project needs, we also help you evaluate
              performance and choose the right strategy to follow.
            </p>
          </div>
          <div className={styles.diplom}>
            <h2>Diplom və Sertifikatlar</h2>
            <p>
              Faced difficulties in adapting to market changes? Are you looking
              to expand your business but unsure about the best strategies to
              pursue? We are here for you. Besides providing your company with a
              remote team based on your project needs, we also help you evaluate
              performance and choose the right strategy to follow.
            </p>
          </div>
          <div className={styles.sertifikat}>
                <img src={YusifDiplom} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;