import { useRef } from "react";
import ChildComponent from "./ChildComponent";

//useRef (line 7): this hook allows a functional conponent to pass a 'ref' down to it's child components

const ParentComponent = () => {
  const childRef = useRef(null);

  const changeTextToWhatChildProvides = () => {
    childRef.current?.changeText();
  };

  return (
    <div>
    <button onClick={changeTextToWhatChildProvides}>Change Text to What Child Component Provides</button>
    <ChildComponent ref={childRef} />
    </div>
  )
};

export default ParentComponent

//childRef (lines 7, 10, 16) - This is a reference to the child component instance.