import './styles/App.css'
import './styles/adaptive.css'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import PetsPage from './pages/PetsPage/PetsPage'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'
import StartScreen from './components/StartScreen'
import Footer from './components/Footer/Footer'

function App() {

    const { pathname } = useLocation()

    const isMainPage = pathname === '/'


    return (
        <>
            <div className="body-wrapper">
                {isMainPage ? (
                    <div className="start-screen">
                        <Header />
                        <StartScreen />

                    </div>
                ) : (
                    <Header />
                )}
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/pets' element={<PetsPage />} />
                </Routes>
                <Footer />
            </div>
        </>
    )
}

export default App
