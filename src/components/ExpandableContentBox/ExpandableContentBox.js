import React, { forwardRef, useRef } from "react";
import styles from "./ExpandableContentBox.module.css";
import classNames from "classnames";
import useOverlap from "../../hooks/useOverlap";
import PropTypes from "prop-types";

const ExpandableContentBox = forwardRef(function (
  { children },
  referenceElementRef,
) {
  const overlappingElementRef = useRef();
  const isOverlapping = useOverlap(referenceElementRef, overlappingElementRef);

  return (
    <div
      className={classNames(styles.expandableContentBox, {
        [styles.expanded]: isOverlapping,
      })}
      ref={overlappingElementRef}
    >
      {children}
    </div>
  );
});

ExpandableContentBox.displayName = "ExpandableContentBox";

ExpandableContentBox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  referenceElementRef: PropTypes.oneOfType([
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
};

export default ExpandableContentBox;
