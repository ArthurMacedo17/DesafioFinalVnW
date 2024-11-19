import styled from "styled-components";


export const SectionStyle = styled.section`
    color: white;
    background-color: rgb(30, 57, 50);
    padding: 21vh 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .h2Novidade{
    font-family: "Inter", sans-serif;
    font-size: 24px;
    font-weight: 700;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 29px;
    
}

.h1Novidade{
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 3em;
    padding-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    line-height: 96px;
}

.textoNovidade{
    font-family: "Poppins", serif;
    font-weight: 400;
    font-size: 20px;
    width: 600px;
    line-height: 36px;
}

.buttonNovidade{
    font-family: "Inter", sans-serif;
    font-size: 25px;
    background-color:#037143;
    color: white;
    border: #037143;
    border-radius:30px;    
    width: 293px;
    height: 64px;
    margin-top: 30px;
}
`