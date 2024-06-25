import './App.css';
import ReferenceElement from "./Elements/ReferenceElement/ReferenceElement";
import OverlappingElement from "./Elements/OverlappingElement/OverlappingElement";
import {useEffect, useRef, useState} from "react";
import image from './image.png';

const App = () => {
    const referenceElementRef = useRef();
    const overlappingElementRef = useRef();
    const [isOverlapping, setIsOverlapping] = useState(false);

    const checkIfIsOverlapping = () => {
        if (referenceElementRef.current && overlappingElementRef.current) {
            const a = referenceElementRef.current.getBoundingClientRect();
            const b = overlappingElementRef.current.getBoundingClientRect();

            if (a.top <= b.top + b.height && a.top + a.height > b.top) {
                setIsOverlapping(true);
            } else {
                setIsOverlapping(false);
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', checkIfIsOverlapping);
        window.addEventListener('resize', checkIfIsOverlapping);

        return () => {
            window.removeEventListener('scroll', checkIfIsOverlapping);
            window.removeEventListener('resize', checkIfIsOverlapping);
        };
    }, []);

    return (
    <div className="app">
      <ReferenceElement ref={referenceElementRef} />
      <OverlappingElement
          ref={overlappingElementRef}
          isExpanded={isOverlapping}
          content={<img className="image" src={image}/>}
      />
    </div>
    );
}

export default App;
