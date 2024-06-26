import React, { forwardRef, ReactElement, useRef } from "react";
import styles from "./ExpandableContentBox.module.css";
import classNames from "classnames";
import useOverlap from "../../hooks/useOverlap";

type Props = {
  children: ReactElement;
};

const ExpandableContentBox = forwardRef<HTMLDivElement, Props>(function (
  { children },
  referenceElementRef,
) {
  const overlappingElementRef = useRef<HTMLDivElement>(null);
  const isOverlapping = useOverlap(
    referenceElementRef as React.RefObject<HTMLDivElement>,
    overlappingElementRef,
  );

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

export default ExpandableContentBox;
