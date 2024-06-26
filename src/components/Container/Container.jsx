import React, { useRef } from "react";
import styles from "./Container.module.css";
import image from "../../assets/cat.webp";
import ExpandableContentBox from "../ExpandableContentBox/ExpandableContentBox";
import WideContentBox from "../WideContentBox/WideContentBox";

const Container = () => {
  const referenceElementRef = useRef();

  return (
    <div className={styles.container}>
      <WideContentBox ref={referenceElementRef} />
      <ExpandableContentBox ref={referenceElementRef}>
        <img className={styles.image} alt="cat" src={image} />
      </ExpandableContentBox>
    </div>
  );
};

export default Container;
