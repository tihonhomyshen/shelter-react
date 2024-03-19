import './styles/App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage/MainPage'
import StartScreen from './components/StartScreen'
import Footer from './components/Footer'

function App() {
    return (
        <>
            <div className="body-wrapper">
                <div className="start-screen">
                    <Header />
                    <StartScreen />
                </div>
                <MainPage />
                <Footer/>
            </div>
        </>
    )
}

export default App
