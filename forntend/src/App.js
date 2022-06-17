
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Register from "./components/Register";

import "./components/login.css";
import DeletProdact from "./components/prodact/deletProdact";
import EditProdact from "./components/prodact/editProdact";
import AddProdact from "./components/prodact/addProdact";
import ProdactList from "./components/prodact/ProdactList";
import UserProfile from "./components/interface/User/UserProfile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GetProdact } from "./components/redux/actions/prodactActions";
import { getcurrent, GetUser } from "./components/redux/actions/authActions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    
    dispatch(getcurrent());
    
  }, [dispatch]);
 

  return (
    <div className="App">
    <Navigation />

    <Routes>
    <Route path='/' element={<Home />} />
    <Route path= '/login' element={<Login></Login>} />
     <Route path= '/register' element={<Register></Register>} />
    <Route path= '/prodactList' element={<ProdactList />} />
    <Route path= '/addProdact' element={<AddProdact></AddProdact>} />
    <Route path= '/editProdact' element={<EditProdact></EditProdact>} />
     <Route path= '/deletProdact' element={<DeletProdact></DeletProdact>} />
     <Route path='/UserProfile' element={<UserProfile />} />
    </Routes>
      
    </div>
  );
}

export default App;