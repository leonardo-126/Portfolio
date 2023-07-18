import './footer.css'
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin  } from 'react-icons/ai';

export const Footer = (props)  => {
    return (
        <div className="footer-container" style={props.dark ? {background: "rgb(227, 213, 191)", color: 'rgb(87, 67, 69)'}: {background: "rgba(57, 50, 77, 0.90)", color: 'rgb(255, 232, 239)'}}>
            <div className='footer-container-info' >
                Cursando Ciência Da Computação
            </div>
            <div className="footer-container-icons">
                <a href="https://twitter.com/leo_paula_1" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><FiTwitter/></a>
                <a href="https://www.instagram.com/leo_paula_1/" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><BsInstagram/></a>
                <a href="https://github.com/leonardo-126" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/leonardo-paiva-0296a4268/" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><AiOutlineLinkedin/></a>
            </div>
            <div className="footer-container-info">
                leopaiva2016@hotmail.com
            </div>
        </div>
    )
}