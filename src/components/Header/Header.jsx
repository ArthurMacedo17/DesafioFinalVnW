import { Link } from "react-router-dom"
import { HeaderStyle,} from "./style"

export default function Header() {
    return (
        <HeaderStyle>
            <img className="LogoHeader" src="src/assets/images/logo 2.png" alt="logomarca" />
            <nav>
                <ul>
                    <li>
                        <Link className="HomeStyle" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="NovidadeStyle" to="/Novidades">Novidade</Link>
                    </li>
                    <li>
                        <Link className="SobreStyle" to="/Sobre">Sobre</Link>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}