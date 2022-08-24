import { useState } from "react";

// Approch:- 1
// const UseInput = (initialValue) => {

//     const [value, setValue] = useState(initialValue);

//     const handleChange = (e) => {
//         setValue(e.target.value)
//     }

//     return {
//         onChange: handleChange,
//         value
//     }
// }

// Approch:- 2
function UseInput({ type /*...*/ }) {
    const [value, setValue] = useState("");
    const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
    return [value, input];
  }

export default UseInput;