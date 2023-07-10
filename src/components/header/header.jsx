import "./header.css"
import { BsFillSunFill } from 'react-icons/bs';
import { BsMoonStarsFill } from 'react-icons/bs';

export const Header = (props) => {
    return (
        <div className="container-header">
            <div className="icon" onClick={props.setDark} >
                {props.dark == true ? <BsFillSunFill/>  : <BsMoonStarsFill/>}
            </div>

            
        </div>
    )
}