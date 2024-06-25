import './OverlappingElement.css';
import {forwardRef} from "react";

const OverlappingElement = forwardRef(function({isExpanded, content}, ref) {
  return (
      <div className={`overlappingElement ${isExpanded ? "expanded" : ''}`} ref={ref}>
          {content}
      </div>
  );
})

export default OverlappingElement;
