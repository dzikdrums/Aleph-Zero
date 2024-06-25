import './OverlappingElement.css';
import {forwardRef} from "react";

const OverlappingElement = forwardRef(function({isExpanded, children}, ref) {
  return (
      <div className={`overlappingElement ${isExpanded ? "expanded" : ''}`} ref={ref}>
          {children}
      </div>
  );
})

export default OverlappingElement;
