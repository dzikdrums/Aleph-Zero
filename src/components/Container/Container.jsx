import React, { useRef } from "react";
import styles from "./Container.module.css";
import image from "../../assets/cat.webp";
import ExpandableContentBox from "../ExpandableContentBox/ExpandableContentBox";
import WideContentBox from "../WideContentBox/WideContentBox";
import useOverlap from "../../hooks/useOverlap";

const Container = () => {
  const referenceElementRef = useRef();
  const overlappingElementRef = useRef();
  const isOverlapping = useOverlap(referenceElementRef, overlappingElementRef);

  return (
    <div className={styles.container}>
      <WideContentBox ref={referenceElementRef} />
      <ExpandableContentBox
        ref={overlappingElementRef}
        isExpanded={isOverlapping}
      >
        <img className={styles.image} alt="cat" src={image} />
      </ExpandableContentBox>
    </div>
  );
};

export default Container;
