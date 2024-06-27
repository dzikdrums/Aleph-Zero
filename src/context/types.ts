import { RefObject } from "react";

type referenceElementRef = {
  referenceElementRef: null | RefObject<HTMLElement>;
};

type overlappingElementRef = {
  overlappingElementRef: null | RefObject<HTMLElement>;
};

export type ExpandableElementsRefs = referenceElementRef &
  overlappingElementRef;

export type updateRefsType = referenceElementRef | overlappingElementRef;

export type ExpandableElementsContextType = {
  refs: ExpandableElementsRefs;
  updateRefs: (ref: updateRefsType) => void;
  isOverlapping: boolean;
};
