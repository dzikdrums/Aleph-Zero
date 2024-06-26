import React, { forwardRef } from "react";
import styles from "./ExpandableContentBox.module.css";
import classNames from "classnames";

const ExpandableContentBox = forwardRef(function (
  { isExpanded, children },
  ref,
) {
  return (
    <div
      className={classNames(styles.expandableContentBox, {
        [styles.expanded]: isExpanded,
      })}
      ref={ref}
    >
      {children}
    </div>
  );
});

ExpandableContentBox.displayName = "ExpandableContentBox";

export default ExpandableContentBox;
