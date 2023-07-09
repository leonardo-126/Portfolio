import "./apresentacao.css"
import { FiTwitter } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { AiFillGithub, AiOutlineLinkedin  } from 'react-icons/ai';


export const Apresentacao = (props) => {
    return (
        <div className="container-apresentacao" style={ props.dark ? { background: '#FAF0D7', color:'black' } : {background: '#39324d', color: 'white'}} >
            <div className="img-pessoal">
                <img src="/minhaFoto.jpg" alt="Minha foto"/>
            </div>
            <div className="info" >
                <div className="info-name">Leonardo de Paula Paiva</div>
                <div className="info-front">Front-end React.Js Developer</div>
                <div className="info-icons">
                    <a href="https://twitter.com/leo_paula_1" target="_blank" ><FiTwitter/></a>
                    <a href="https://www.instagram.com/leo_paula_1/" target="_blank"><BsInstagram/></a>
                    <a href="https://github.com/leonardo-126" target="_blank"><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/leonardo-paiva-0296a4268/" target="_blank"><AiOutlineLinkedin/></a>
                </div>
                <div className="info-email">leopaiva2016@hotmail.com</div>
            </div>
        </div>
    )
}