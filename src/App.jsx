import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './assets/pages/Home/Home.jsx';
import News from './assets/pages/News/News.jsx';
import Map from './assets/pages/Map/Map.jsx';
import Account from './assets/pages/Account/Account.jsx';
import Menu from './assets/pages/Menu/Menu.jsx';

import Footer from './assets/components/Footer/Footer';
import HomeHeader from './assets/components/Headers/Home/Home';
import NewsHeader from './assets/components/Headers/News/News';
import MapHeader from './assets/components/Headers/Map/Map';
import AccountHeader from './assets/components/Headers/Account/Account.jsx';
import MenuHeader from './assets/components/Headers/Menu/Menu.jsx';

function App() {
    console.log('App');
    return (
        <Router>
            <HeaderController />
            <RouterController />
            <Footer />
        </Router>
    );
}

function HeaderController() {
    const location = useLocation();
    const { pathname } = location;

    if (pathname === "/") {
        return <HomeHeader />;
    } else if (pathname === "/home") {
        return <HomeHeader />;
    }else if (pathname === "/news") {
        return <NewsHeader />;
    } else if (pathname === "/map") {
        return <MapHeader />;
    } else if (pathname === "/account") {
        return <AccountHeader />;
    } else if (pathname === "/menu") {
        return <MenuHeader />;
    }
}

function NotFound() {
    const location = useLocation();
    const { pathname } = location;

    return <h1 id={'notfound'}>404 Page introuvable : {pathname}</h1>;
}

function RouterController() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/map" element={<Map />} />
            <Route path="/account" element={<Account />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;