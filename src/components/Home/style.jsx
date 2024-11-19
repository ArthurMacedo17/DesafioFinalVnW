import styled from "styled-components";

export const MainStyled = styled.main`
display: flex;;
align-items: center;
flex-direction: column;


.apresentação{
    padding-right: 50vw;
    padding-top: 4vh;
    
}

.h2Home{
    font-family: "Inter", sans-serif;
    font-size: 60px;
    font-weight: 400;
    display: inline;

    
}

.h1Home{
    font-family: "Poppins", serif;
    font-weight: 700;
    font-size: 76px;
    padding: 20px;
    display: inline;
    color: #037143;
}

.textoHome{
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 24px;
    width: 750px;
    line-height: 36px;
    
}

.buttonHome{
    font-family: "Inter", sans-serif;
    font-size: 25px;
    background-color:#037143;
    color: white;
    border-radius: 30px;               width: 293px;
    height: 64px;
    margin-top: 30px;
    
}

.copos1x{
    margin-top: 15vh;
    margin-right: 15vw;

    .laranja,
    .vermelho,
    .amarelo {
        transition: ease-in;
    &:hover {
        transform: translatey(-9px) rotate(11deg);
    }
  } 
}

.circulo{
    background-color: ${(props) => props.$corCirculo};
    position: fixed;
    border-radius: 50%;
    width: 946px;
    height: 976px;
    bottom: -380px;
    right: -360px;
    

    border-radius: 50%;
}
.imgcopo2x{
    position: relative;
    width: 600px;
    left: 2vw;
    bottom: 6vh;
}
`