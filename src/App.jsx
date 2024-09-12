import { Header } from "./components/Header/Header";
import { Cart } from "./components/Cart/Cart";
import { Home } from "./components/Home/Home";
import { Likes } from "./components/Likes/Likes";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/likes" element={<Likes/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;
