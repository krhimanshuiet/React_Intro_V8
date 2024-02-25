import { useEffect, useState, useMemo } from "react";
const expensiveMathOperation = (n) => {
  if (n <= 1) {
    return 1;
  }

  return expensiveMathOperation(n - 1) + expensiveMathOperation(n - 2);
};

export default function Home() {
  const [count, setCount] = useState(35);
  const [left, setLeft] = useState(0);
  const value = useMemo(() => expensiveMathOperation(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <div
        style={{ left: `${Math.sin(left * 0.05) * 100 + 100}px` }}
        className="ball"
      ></div>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h2>Result of an expensive math computation: {value}</h2>
    </div>
  );
}
