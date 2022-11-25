import {BrowserRouter, Routes, Route} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <div className="pages">
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
