import React, { useState } from "react";

function Counter() {
  const [product, setProduct] = useState({
    name: 'Fruits',
    count: 0,
  });

  const handlerPlus = () => {
    setProduct(prevProduct => {
      return { 
        ...prevProduct,
        count: prevProduct.count + 1 
      }
    })
  }
  const handlerMinus = () => {
    if (count > 0) {
      setCount((prevCount) => {
        return prevCount - 1;
      });
    }
  };
  const [name, setName] = useState('Fruits');
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handlerMinus}>-</button>
      <span>{product.count}</span>
      <button onClick={handlerPlus}>+</button>
    </>
  );
}
export default Counter;
