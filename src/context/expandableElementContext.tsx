import React from "react";
import {
  ExpandableElementsContextType,
  ExpandableElementsRefs,
  updateRefsType,
} from "./types";
import useOverlap from "../hooks/useOverlap";

export const ExpandableElementContext =
  React.createContext<ExpandableElementsContextType>({
    refs: {
      referenceElementRef: null,
      overlappingElementRef: null,
    },
    updateRefs: () => {},
    isOverlapping: false,
  });

const ExpandableElementContextProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [refs, setRefs] = React.useState<ExpandableElementsRefs>({
    referenceElementRef: null,
    overlappingElementRef: null,
  });
  const isOverlapping = useOverlap(
    refs.referenceElementRef,
    refs.overlappingElementRef,
  );

  const updateRefs = (ref: updateRefsType) => {
    setRefs((prevRefs) => ({ ...prevRefs, ...ref }));
  };

  return (
    <ExpandableElementContext.Provider
      value={{ refs, updateRefs, isOverlapping }}
    >
      {children}
    </ExpandableElementContext.Provider>
  );
};

export default ExpandableElementContextProvider;
