
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import "./components/login.css";
function App() {
 

  return (
    <div className="App">
    <Navigation></Navigation>
    <Routes>
    <Route path='/' element={<Home></Home>} />
    <Route path= '/Login' element={<Login></Login>} />
     <Route path= '/Register' element={<Register></Register>} />
    
    </Routes>
     
    </div>
  );
}

export default App;