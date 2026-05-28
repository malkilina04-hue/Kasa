import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'
import Error from './pages/Error'
import Header from './components/Header/index.jsx'
import Footer from './components/Footer/index.jsx'
import APropos from './pages/APropos'

function AppRouter() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
                <Route path="/apropos" element={<APropos />} />
            </Routes>
            <Footer />
        </Router>
    )
}

export default AppRouter
