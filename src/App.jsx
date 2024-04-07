import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

//COMPONENTS
import { Navbar, ScrollToTop } from './components';

//PAGES
import { Home } from './pages';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {

    useEffect(function () {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Router>
                <ScrollToTop />
                <Routes>

                    <Route path="/" element={<HomeLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/*" element={<Home />} />
                    </Route>

                </Routes>
            </Router>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />
            
            <Navbar />
        </>
    );
};

export default App
