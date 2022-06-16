import './App.css';
import Home from "./Home";
import NavBar from "./NavBar";
import  {Route, Routes} from 'react-router'
import Login from "./Login";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Novedades from "./Novedades";
import Biblioteca from "./Biblioteca";
import Footer from "./Footer";


function App() {
    return (
        <div>
            <NavBar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"login"} element={<Login/>}/>
                <Route path={"novedades"} element={<Novedades/>}/>
                <Route path={"biblioteca"} element={<Biblioteca/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
