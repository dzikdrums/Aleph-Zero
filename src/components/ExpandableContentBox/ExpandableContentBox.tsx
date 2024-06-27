import React, { useContext, useEffect, useRef } from "react";
import styles from "./ExpandableContentBox.module.css";
import classNames from "classnames";
import { ExpandableElementContext } from "../../context/expandableElementContext";

const ExpandableContentBox: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const overlappingElementRef = useRef<HTMLDivElement>(null);
  const { updateRefs, isOverlapping } = useContext(ExpandableElementContext);

  useEffect(() => {
    if (overlappingElementRef) {
      updateRefs({ overlappingElementRef: overlappingElementRef });
    }
  }, [overlappingElementRef]);

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
};

ExpandableContentBox.displayName = "ExpandableContentBox";

export default ExpandableContentBox;
