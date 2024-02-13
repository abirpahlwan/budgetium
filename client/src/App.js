import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="page">
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
