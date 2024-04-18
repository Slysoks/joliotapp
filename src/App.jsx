import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './assets/pages/Home/Home.jsx';
import News from './assets/pages/News/News.jsx';
import Map from './assets/pages/Map/Map.jsx';

import Footer from './assets/components/Footer/Footer';
import HomeHeader from './assets/components/Headers/Home/Home';
import NewsHeader from './assets/components/Headers/News/News';
import MapHeader from './assets/components/Headers/Map/Map';


function App() {
    return (
        <Router>
            <HeaderController/>
            <RouterController/>
            <Footer/>
        </Router>
    );
}

function HeaderController() {
    const location = useLocation();
    const { pathname } = location;

    console.log('HeaderController', location);

    let name;

    if (pathname === '/') {
        name = 'home';
    } else {
        name = pathname.substring(1);
    }

    return(
        <header>
            <h1 style={{textTransform: "uppercase"}}>{name}</h1>
        </header>
    )

}

function NotFound() {
    const location = useLocation();
    const { pathname } = location;

    return <h1 id={'notfound'}>Page introuvable : {pathname}</h1>;
}

function RouterController() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;