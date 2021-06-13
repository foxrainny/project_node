import Location from './location'
import '../App.css'
import dinner from '../img/dinner.jpg'

const Main = () =>
{
    return (
        <div>
            <div className="container">
                <img className="image-dinner" src={dinner} width="300" height="300"/>
                <div className="main-box"> <Location /> </div>
            </div>
        </div>
        )
}

export default Main;