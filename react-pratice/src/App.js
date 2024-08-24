import { useState } from "react";
import "./App.css";
// import NestedFolder from './Components/NestedFolder/NestedFolder';
// import explorer from './Components/NestedFolder/data/NestedFolder';

/* shopping app code */
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './ComponentReactCart/Header/Header';
// import Home from './ComponentReactCart/Home/Home';
// import Cart from './ComponentReactCart/Cart/Cart';
/* shopping app code end */

// import UseInput from './CustomHooks/UseInput';
// import UseTimeHook from './CustomHooks/UseTimeHook';

function App() {
  // Approch:-1 for useInput
  // const email = UseInput("");

  // Approch:- 2 for useInput
  // const [username, userInput] = UseInput({ type: "text" });

  // const [time] = UseTimeHook();

  // const [count, setCount] = useState(0);
  // const handleClickOuter = () => {
  //   setCount(0);
  // };
  // const ref = useOutSideClick(handleClickOuter);
  // const handleClick = () => {
  //   setCount((state) => state + 1);
  // };
  // const handleClickHeader = (e) => {
  //   e.stopPropagation();
  // };

  function debounce(func, timeout = 2000) {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  function throttle(fn, timeout = 2000) {
    let flag = true;
    return (...args) => {
      if (flag) {
        flag = false;
        fn.apply(this, args);
        setTimeout(() => {
          flag = true;
        }, timeout);
      }
    };
  }

  function saveInput() {
    console.log("Saving data");
  }

  // const processChange = debounce(saveInput);
  const processChange = throttle(saveInput);

  return (
    <div className="App">
      {/* react-cart-app */}

      {/* shopping app code */}
      {/* <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/cart' exact element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter> */}
      {/* shopping app code end*/}

      {/* Custom Hooks */}
      {/* <p>{time}</p> */}

      {/* Approch:- 1 useInput */}
      {/* <input placeholder='email' {...email} /> */}

      {/* Approch:- 2 useInput */}
      {/* {userInput} */}

      {/* Custom Hooks end*/}

      {/* nested folder pratice */}
      {/* <NestedFolder explorer={explorer} /> */}

      <input onChange={processChange} />
    </div>
  );
}

export default App;
