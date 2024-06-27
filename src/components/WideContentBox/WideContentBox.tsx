import React, { useContext, useEffect, useRef } from "react";
import styles from "./WideContentBox.module.css";
import { ExpandableElementContext } from "../../context/expandableElementContext";

const WideContentBox = () => {
  const { updateRefs } = useContext(ExpandableElementContext);
  const referenceElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (referenceElementRef) {
      updateRefs({ referenceElementRef: referenceElementRef });
    }
  }, [referenceElementRef]);

  return <div className={styles.referenceElement} ref={referenceElementRef} />;
};

WideContentBox.displayName = "WideContentBox";

export default WideContentBox;
