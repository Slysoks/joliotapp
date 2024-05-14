import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './assets/pages/Home/Home.jsx';
import News from './assets/pages/News/News.jsx';
import Map from './assets/pages/Map/Map.jsx';
import Account from './assets/pages/Account/Account.jsx';
import Timetable from "./assets/pages/Timetable/Timetable.jsx";

import Footer from './assets/components/Footer/Footer';


function App() {
    // -webkit-tap-highlight-color: transparent; is used to remove the blue highlight when clicking on a button
    return (
        <Router>
            <HeaderController />
            <RouterController />
            <FooterController />
        </Router>
    );
}

function HeaderController() {
    const location = useLocation();
    const { pathname } = location;

    let name;

    // Define some custom names for the pages

    if (pathname === '/') {
        name = 'accueil';
    } else if (pathname === '/timetable') {
        name = 'emploi du temps';
    } else if (pathname === '/account') {
        name = 'compte';
    } else if (pathname === '/map' || pathname === '/carte') {
        name = 'carte';
    } else if (pathname.startsWith('/news')) {
        name = 'actualités';

    }

    return(
        <header style={{
            textAlign: 'left',
            padding: '1rem',
            borderBottom: '1px solid #ccc',
            backgroundColor: '#f8f9fa',
            filter: 'drop-shadow(0 0 0.5rem #999)'
        }}>
            <h1 style={{textTransform: "uppercase"}}>{name}</h1>
        </header>
    )
}

function FooterController() {
    const location = useLocation();
    const { pathname } = location;

    let name;

    if (pathname === '/') {
        name = 'home';
    }  else {
        name = pathname.substring(1);
    }

    return(
        <Footer page={name}/>
    )
}

function NotFound() {
    const location = useLocation();
    const { pathname } = location;

    return (
        <h1 id={'notfound'} style={{
            width: '100%', height: '100%', textAlign: 'center'
        }}>
            Erreur 404 Page introuvable : {pathname}
        </h1>
    );
}

function RouterController() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/map" element={<Map />} />
            <Route path="/carte" element={<Map />} />
            <Route path="/account" element={<Account />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
