import './informacoes.css'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import React, { useState } from 'react';

export const Info = (props) => {
        const [content,setContent] = useState(false)
        const [content2,setContent2] = useState(false)
        const [iconeAtual,setIconeAtual] = useState(true)
        const [iconeAtual2,setIconeAtual2] = useState(true)

        const toogleInfo = () => {
            setContent(!content)
            setIconeAtual(!iconeAtual)

        }



        const toogleInfo2 = () => {
            setContent2(!content2)
            setIconeAtual2(!iconeAtual2)

        }
    return (
        <div className="info-container">
            <div className="info-title">
                <h1>Informações</h1>
            </div>
            <div className="info-details">
                <div className="info-details-box" onClick={toogleInfo} >
                    <h3>Sobre {iconeAtual ? <AiOutlineArrowDown/> : <AiOutlineArrowUp/>} </h3>
                    {content ? <div className="info-details-box-dentro" style={props.dark ? {background: "rgb(227, 213, 191)"} : {background: "#30264a"} }><p>Meu nome é Leonardo de Paula Paiva, um estudante de Ciência da Computação apaixonado por programação. Com apenas 18 anos, estou empenhado em desenvolver soluções inovadoras que possam impactar positivamente a vida das pessoas. Tenho conhecimentos  em HTML, CSS, JavaScript, React, C e C#, e estou sempre buscando aprender e acompanhar as últimas tendências tecnológicas. Estou determinado a me destacar como um programador excepcional e contribuir com projetos desafiadores. Com minha criatividade, perseverança e vontade de fazer a diferença, estou pronto para embarcar em novas jornadas e aperfeiçoar ao máximo minhas habilidades e competências.</p></div> : <></>}
                </div>
                <div className="info-details-box" onClick={toogleInfo2}>
                    <h3>Porque deveria me contratar ? {iconeAtual2 ? <AiOutlineArrowDown/> : <AiOutlineArrowUp/>}</h3>

                    {content2 ? <div className="info-details-box-dentro" style={props.dark ? {background: "rgb(227, 213, 191)"} : {background: "#30264a"} } ><p>Eu, Leonardo de Paula Paiva, sou um candidato apaixonado por desafios e com uma sede insaciável por conhecimento. Como estudante de Ciência da Computação, estou sempre disposto a enfrentar novos desafios e aprender com eles. Minha atitude de aprendizado contínuo e minha paixão por adquirir conhecimento me tornam uma escolha valiosa para sua equipe. Estou comprometido em contribuir com dedicação, criatividade e trabalho em equipe. Agradeço a oportunidade de considerar minha candidatura e estou entusiasmado para fazer parte do seu projeto. Juntos, podemos superar desafios e alcançar resultados notáveis.</p></div> : <></>}
                </div>
            </div>
        </div>
    )
}