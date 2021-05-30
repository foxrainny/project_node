import Location from './location'
import '../App.css'
import dinner from '../img/dinner.jpg'

const Main = () =>
{
    return (
        <div>
            <div className="container">  
                <img src={dinner} width="200" height="200"/>
            </div>
            <div> <Location /> </div>
        </div>
    
        )
}

export default Main;