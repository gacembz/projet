
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Register from "./components/Register";

import "./components/login.css";
import DeletProdact from "./components/prodact/deletProdact";
import EditProdact from "./components/prodact/editProdact";
import AddProdact from "./components/prodact/addProdact";
import ProdactList from "./components/prodact/prodactList";
function App() {
 

  return (
    <div className="App">
    <Navigation></Navigation>
    <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path= '/login' element={<Login></Login>} />
     <Route path= '/register' element={<Register></Register>} />
    <Route path= '/prodactList' element={<ProdactList></ProdactList>} />
    <Route path= '/addProdact' element={<AddProdact></AddProdact>} />
    <Route path= '/editProdact' element={<EditProdact></EditProdact>} />
     <Route path= '/deletProdact' element={<DeletProdact></DeletProdact>} />
     /
    </Routes>
     
    </div>
  );
}

export default App;