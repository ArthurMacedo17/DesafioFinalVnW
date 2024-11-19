import styled from "styled-components";

export const SectionStyle = styled.section`
 display: flex;
 justify-content: space-between;
 align-items: center;
 color: #1E3932;

.imgSobre{
    display: flex;
    width: 25;
    padding-left: 15vw;
   padding-top: 15vh;
}

.divSobre{
   padding-right: 17vw;
   padding-top: 15vh;
}

.h2Sobre{
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 29px;
    
}

.h1Sobre{
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 3em;
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 96px;
}

.textoSobre{
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 20px;
    width: 600px;
    line-height: 36px;
}

.buttonSobre{
    font-family: "Inter", sans-serif;
    font-size: 25px;
    background-color:#037143;
    color: white;
    border-radius: 30px;               width: 293px;
    height: 64px;
    margin-top: 30px;
}

`