import React, { forwardRef } from "react";
import styles from "./WideContentBox.module.css";

const WideContentBox = forwardRef<HTMLDivElement>(function (props, ref) {
  return <div className={styles.referenceElement} ref={ref} />;
});

WideContentBox.displayName = "WideContentBox";

export default WideContentBox;
