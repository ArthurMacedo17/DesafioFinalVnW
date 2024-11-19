import styled from "styled-components";

export const HeaderStyle = styled.header`
display: flex;
justify-content: space-between;
font-family: "Poppins", serif;

.LogoHeader{
    padding: 20px;
    padding-left: 50px;
  width: 12em;
  background-color: #ffff;
}

ul{
    font-size: 24px;
   list-style: none;
   display: flex;
   align-items: center;
   padding: 60px;
   padding-right: 8vw;
   gap: 10vh;
}

.HomeStyle{
    text-decoration: none;
    color: #1e3932;

    &:hover{
       color: chartreuse;
   }
}

.NovidadeStyle{
    text-decoration: none;
    color: #1e3932;

    &:hover{
       color: chartreuse;
   }
}

.SobreStyle{
    text-decoration: none;
    color: #1e3932;

    &:hover{
       color: chartreuse;
   }
}
`
