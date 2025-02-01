import React, { useState } from "react";
import Counter from "./Counter";
function App() {
  // let name = "";
  const [name, setName] = useState('hema')

  const handleClick = ()=>{
    // name = 'akask';
    // alert(name);
    setName('akash');
  }
  return (
    <>
    {/* <h1>Hello {name}</h1>
    <button onClick={handleClick}>Click</button> */}
    <Counter />
    </>
  );
}

export default App;
