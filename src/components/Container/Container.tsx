import React from "react";
import styles from "./Container.module.css";
import ExpandableContentBox from "../ExpandableContentBox/ExpandableContentBox";
import WideContentBox from "../WideContentBox/WideContentBox";
import ExpandableElementContextProvider from "../../context/expandableElementContext";
import cat from "../../assets/cat.webp";

const Container = () => {
  return (
    <div className={styles.container}>
      <ExpandableElementContextProvider>
        <WideContentBox />
        <ExpandableContentBox>
          <img src={cat} alt="cat" />
        </ExpandableContentBox>
      </ExpandableElementContextProvider>
    </div>
  );
};

export default Container;
