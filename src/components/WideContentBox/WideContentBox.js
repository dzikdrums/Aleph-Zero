import React, { forwardRef } from "react";
import styles from "./WideContentBox.module.css";
import PropTypes from "prop-types";

const WideContentBox = forwardRef(function (props, ref) {
  return <div className={styles.referenceElement} ref={ref} />;
});

WideContentBox.displayName = "WideContentBox";

WideContentBox.propTypes = {
  ref: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default WideContentBox;
