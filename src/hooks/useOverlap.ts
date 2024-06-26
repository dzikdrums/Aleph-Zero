import { RefObject, useCallback, useEffect, useState } from "react";

// This custom hook allows us to pass refs to two elements in parameters, and it will
// return a boolean, stating if the elements are overlapping.

const useOverlap = (
  referenceElementRef: RefObject<HTMLDivElement>,
  overlappingElementRef: RefObject<HTMLDivElement>,
) => {
  const [isOverlapping, setIsOverlapping] = useState(false);

  const checkIfIsOverlapped = useCallback(() => {
    if (referenceElementRef.current && overlappingElementRef.current) {
      const a = referenceElementRef.current.getBoundingClientRect();
      const b = overlappingElementRef.current.getBoundingClientRect();

      if (a.top <= b.top + b.height && a.top + a.height > b.top) {
        setIsOverlapping(true);
      } else {
        setIsOverlapping(false);
      }
    }
  }, [referenceElementRef, overlappingElementRef]);

  useEffect(() => {
    window.addEventListener("scroll", checkIfIsOverlapped);
    window.addEventListener("resize", checkIfIsOverlapped);

    return () => {
      window.removeEventListener("scroll", checkIfIsOverlapped);
      window.removeEventListener("resize", checkIfIsOverlapped);
    };
  }, [checkIfIsOverlapped]);

  return isOverlapping;
};

export default useOverlap;
