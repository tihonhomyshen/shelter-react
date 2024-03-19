import './styles/App.css'
import './styles/adaptive.css'
import {Routes, Route, Link} from 'react-router-dom'
import {PetsPage} from './pages/PetsPage/PetsPage'
import Header from './components/Header/Header'
import MainPage from './pages/MainPage/MainPage'
import StartScreen from './components/StartScreen'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <div className="body-wrapper">
                <div className="start-screen">
                    <Header />
                    <StartScreen />
                </div>
                <MainPage />
                <Footer />
            </div>
        </>
    )
}

export default App
