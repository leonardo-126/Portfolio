import { ProjetoProps } from './projetoProps/projetoProps'
import './projetos.css'

export const Projeto = (props) => {
    return (
        <div className="porjetos-container">
            <div className="projetos-title">
                Projetos
            </div>
            <div className="projetos-container-box">
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
                <ProjetoProps link="https://pokedex-xi-red.vercel.app/" imgFundo="fundoTeste.jpg" altFundo="projeto" dark={props.dark}/>
            </div>
        </div>

    )
}