import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const CountChild = forwardRef((props, ref) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(count)

  useImperativeHandle(ref, () => ({
    incrementByOne() {
      setCount((previousCount) => previousCount + 1);
    }
  }));

  return <div ref={countRef}>{count}</div>

});

export default CountChild;