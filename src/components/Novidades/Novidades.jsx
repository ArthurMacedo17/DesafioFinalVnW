import {SectionStyle} from "./style"

export default function Novidades() {
    return(
        
        <SectionStyle>
            <div>
            <h2 className="h2Novidade">Preparação</h2>
            <h1 className="h1Novidade">Níveis de torra</h1>
            <p className="textoNovidade">Qual a torra que prefere? Starbucks® Torra Clara, Torra Média ou Torra Escura? Estas sãos as torras que fazem parte dos níveis de torra Starbucks®</p>
            <button className="buttonNovidade">Saiba mais</button>
            </div>
            <div>
                <img src="src\assets\images\fotoNovidade.png" alt="" />
            </div>
        </SectionStyle>
        
    )
}