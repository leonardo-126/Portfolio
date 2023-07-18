import React, { useState } from "react";
import "./home.css"
import { Header } from "../components/header/header";
import { Apresentacao } from "../components/apresentacao/apresentacao";
import { Skills } from "../components/skills/skills";
import { Info } from "../components/informacoes/informacoes";
import { Frase } from "../components/frase/frase";
import { Footer } from "../components/footer/footer";
import { Projeto } from "../components/projetos/projetos";


export const Home = () => {
    const [dark,setDark] = useState(true)


    return (
        <>
            <Header dark={dark} setDark={() => setDark(!dark)} />
            <div style={ dark ? { background: '#F5EED4', color: 'rgb(87, 67, 69)'} : {background: '#39324d', color: 'rgb(255, 232, 239)'}} className="container-home">
                <Apresentacao dark={dark} />
                <Skills/>
                <Projeto dark={dark} />
                <Info dark={dark}/>
                <Frase/>
            </div> 
            <Footer dark={dark} />
        </>
    )
}