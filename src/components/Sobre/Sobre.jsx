import {SectionStyle } from "./style"

export default function Sobre() {
    return (
        <SectionStyle>
            <div>
                <img className = "imgSobre"
                src="src\assets\images\FotoSobre.png" alt="" />
            </div>
            
            <div
            className="divSobre">
            <h2 className="h2Sobre">Preparação</h2>
            <h1 className="h1Sobre">Níveis de torra</h1>
            <p className="textoSobre">Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
            <button className="buttonSobre">Saiba mais</button>
            </div>
            
        </SectionStyle>
    )
}