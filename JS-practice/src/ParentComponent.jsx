import { useRef } from "react";
import ChildComponent from "./ChildComponent";
import CountChild from "./CountChild";

//useRef (line 7): this hook allows a functional conponent to pass a 'ref' down to it's child components

const ParentComponent = () => {
  const childTextRef = useRef(null);
  const childCountRef = useRef(0);

  const changeTextToWhatChildProvides = () => {
    childTextRef.current?.changeText();
  };

  const incrementByOneUsingRef = () => {
    childCountRef.current?.incrementByOne()
  }

  return (
    <div>
    <button onClick={changeTextToWhatChildProvides}>Change Text to What Child Component Provides</button>
    <button onClick={incrementByOneUsingRef}>Increment by One Using Ref</button>
    <ChildComponent ref={childTextRef} />
    <CountChild ref={childCountRef}/>
    </div>
  )
};

export default ParentComponent

//childTextRef (lines 7, 10, 16) - This is a reference to the child component instance.