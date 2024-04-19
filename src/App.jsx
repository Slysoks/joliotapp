import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Home from './assets/pages/Home/Home.jsx';
import News from './assets/pages/News/News.jsx';
import Map from './assets/pages/Map/Map.jsx';

import Footer from './assets/components/Footer/Footer';


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