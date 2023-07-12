import "./header.css"
import { BsFillSunFill } from 'react-icons/bs';
import { BsMoonStarsFill } from 'react-icons/bs';

export const Header = (props) => {
    return (
        <div className="container-header" style={props.dark ? {background: "rgb(227, 213, 191)"}: {background: "rgba(57, 50, 77, 0.90)"} }>
            <div className="icon" onClick={props.setDark} >
                {props.dark == true ? <BsFillSunFill/>  : <BsMoonStarsFill/>}
            </div>
        </div>
    )
}