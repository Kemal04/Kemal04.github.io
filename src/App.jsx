import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'

//COMPONENTS
import { Footer, Navbar, ScrollToTop } from './components';

//PAGES
import { Home } from './pages';

const App = () => {
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
