import './App.css'
import Navbar from './components/Navbar/Navbar'
import Body from './components/Body/Body'
import HeaderContainer from './components/Header/HeaderContainer'

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navbar/>
            <Body/>
        </div>
    )
}


export default App
