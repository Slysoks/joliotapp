import './Footer.scss'
import { Link } from 'react-router-dom';

export default function Footer({ page }) {
    return (
        <>
            <footer>
                <nav>
                    <ul>
                        <li>
                            <Link to={'map'}>
                                <img src="/src/assets/img/icons/map.svg" alt="Carte"
                                     className={page === 'map' ? 'active' : ''}/>
                            </Link>
                        </li>
                        <li>
                            <Link to={'news'}>
                                <img src="/src/assets/img/icons/news.svg" alt="News"
                                     className={page === 'news' ? 'active' : ''}/>
                            </Link>
                        </li>
                        <li>
                            <Link to={'/'}>
                                <img src="/src/assets/img/icons/home.svg" alt="Accueil"
                                     className={page === 'home' || page === '' ? 'active' : ''}/>
                            </Link>
                        </li>
                        <li>
                            <Link to={'menu'}>
                                <img src="/src/assets/img/icons/menu.svg" alt="Menu"
                                     className={page === 'menu' ? 'active' : ''}/>
                            </Link>
                        </li>
                        <li>
                            <Link to={'account'}>
                                <img src="/src/assets/img/icons/account.svg" alt="Compte"
                                     className={page === 'account' ? 'active' : ''}/>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>

    )
}