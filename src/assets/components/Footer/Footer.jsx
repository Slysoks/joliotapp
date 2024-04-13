import './Footer.scss'
import { Link } from 'react-router-dom';

function Footer() {
    console.log('Footer')
    return (
        <footer>
            <nav>
                <ul>
                    <li>
                        <Link to={'map'}>
                            <img src="/src/assets/img/icons/map.svg" alt="Carte"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'news'}>
                            <img src="/src/assets/img/icons/news.svg" alt="News"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'/'}>
                            <img src="/src/assets/img/icons/home.svg" alt="Accueil"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'menu'}>
                            <img src="/src/assets/img/icons/menu.svg" alt="Menu"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={'account'}>
                            <img src="/src/assets/img/icons/account.svg" alt="Compte"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    )
}

export default Footer