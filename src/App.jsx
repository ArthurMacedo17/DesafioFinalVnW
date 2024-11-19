import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Novidades from "./components/Novidades/Novidades";
import Sobre from "./components/Sobre/Sobre";
import Global from "./assets/global";


export default function App() {
  return(
    <>
    <Global/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Novidades" element={<Novidades/>}/>
      <Route path="/Sobre" element={<Sobre/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}