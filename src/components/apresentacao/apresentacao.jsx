import "./apresentacao.css"
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin  } from 'react-icons/ai';



export const Apresentacao = (props) => {

    return (
        <div className="container-apresentacao"  >
            <div className="img-pessoal">
                <img src="/dexFoto.png" alt="Minha foto"/>
            </div>
            <div className="info" >
                <div className="info-name">Leonardo de Paula Paiva</div>
                <div className="info-front">Front-end React.Js Developer</div>
                <div className="info-icons">
                    <a href="https://twitter.com/leo_paula_1" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><FiTwitter/></a>
                    <a href="https://www.instagram.com/leo_paula_1/" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><BsInstagram/></a>
                    <a href="https://github.com/leonardo-126" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/leonardo-paiva-0296a4268/" target="_blank" style={props.dark ? {color: "rgb(87, 67, 69)"} : {color: "rgb(255, 232, 239)"}}><AiOutlineLinkedin/></a>
                </div>
                <div className="info-email">leopaiva2016@hotmail.com</div>
            </div>
        </div>
    )
}