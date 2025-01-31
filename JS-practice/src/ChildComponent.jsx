import { forwardRef, useImperativeHandle, useRef } from "react";

{/*fowardRef (line 7) -  this hook allows a functional conponent to pass a 'ref' down to it's child components. In this case,
  ParentComponent.jsx is passing the ref to this component (ChildComponent.jsx) */}
//useRef (line 8) - this hook create a mutable object whose .current property is initailized and given a value.
//useImperativeHandle (line 10) - this hook customizes the instance value that is exposed when using 'ref'

const ChildComponent = forwardRef((props, ref) => {
  const textRef = useRef(null)

  useImperativeHandle(ref, () => ({
  changeText() {
    if (textRef.current) {
      textRef.current.innerText = "Text has been changed!"
    }
  } 
  }));

  return <div ref={textRef}>Initial Text</div>
});

export default ChildComponent;

//textRef (lines 8, 12, 13, 18) - this is a reference to the div element containing the inital text. This allows direct access and manipulation of the DOM element.
{/*useImperativeHandle(ref, () => ({ ... })) (lines 10-16) - this customizes waht the ref in the parent component can access. In this exercise, it creates a 
  changeText mehtod that updates the text inside the 'div' element referenced by textRef.  */}