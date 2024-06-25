import './ReferenceElement.css';
import {forwardRef} from "react";

const ReferenceElement = forwardRef(function(props, ref) {
  return (
      <div className="referenceElement" ref={ref} />
  );
});

export default ReferenceElement;