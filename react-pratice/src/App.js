import './App.css';
// import NestedFolder from './Components/NestedFolder/NestedFolder';
// import explorer from './Components/NestedFolder/data/NestedFolder';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './ComponentReactCart/Header/Header';
import Home from './ComponentReactCart/Home/Home';
import Cart from './ComponentReactCart/Cart/Cart';

function App() {
  return (
    <div className="App">
      {/* react-cart-app */}

      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/cart' exact element={<Cart />}/>
          </Routes>
        </div>
      </BrowserRouter>
      

      {/* nested folder pratice */}
      {/* <NestedFolder explorer={explorer} /> */}
    </div>
  );
}

export default App;
