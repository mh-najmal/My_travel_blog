import globe from '../images/globe.png'
import './components.css'

export default function Header() 
{
    return(
        <header>
            <img src={globe} alt="globe"/>
            <h1>My Travel Journal</h1>
        </header>
    )
}    