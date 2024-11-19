import { useState } from "react"
import {MainStyled} from "./style"
import copo1xlaranja from "../../assets/images/laranja1x.png"
import copo2xlaranja from "../../assets/images/laranja2x.png"
import copo1xvermelho from "../../assets/images/vermelho1x.png"
import copo2xvermelho from "../../assets/images/vermelho2x.png" 
import copo1xamarelo from "../../assets/images/amarelo1x.png" 
import copo2xamarelo from "../../assets/images/amarelo2x.png" 

export default function Home() {

  const[corCirculo, setCorCirculo]= useState("#037143");
  const[imagemCopo2x, setImagemCopo2x]= useState(copo2xlaranja);

  const trocarCopo = (cor,imagem) => {
    setCorCirculo(cor);
    setImagemCopo2x(imagem);
  };
    return (      
        <MainStyled $corCirculo={corCirculo}>
          <section className="apresentação">
            <h2 className="h2Home">Mais que Café</h2>
            <div> 
            <h2 className="h2Home">Isso é</h2>
            <h1 className="h1Home">Starbucks</h1>
            </div> 
            <p className="textoHome">A Starbucks oferece uma variedade de cafés de alta qualidade. Alguns dos cafés mais populares incluem o Caffè Americano, o Cappuccino, o Latte Macchiato e o Espresso. Além disso, a Starbucks oferece bebidas quentes e frias, doces diferenciados e sanduíches.</p>
            <button className="buttonHome">Saiba mais</button>
          </section>      
          <section className="copos1x">
            <img className="laranja" src={copo1xlaranja} alt="" onClick={() => trocarCopo("#037143",copo2xlaranja)}/>
           <img className="vermelho"  src={copo1xvermelho} alt="" onClick={() => trocarCopo("#97090C",copo2xvermelho)}/>
           <img className="amarelo" src={copo1xamarelo} alt="" onClick={() => trocarCopo("#DECD13",copo2xamarelo)}/>
          </section>    
          <section className="circulo">
            <div>
               <img className="imgcopo2x" src={imagemCopo2x} alt="" /> 
            </div>
          </section>         
        </MainStyled>
    )
  }