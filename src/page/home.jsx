import React, { useState } from "react";
import "./home.css"
import { Header } from "../components/header/header";
import { Apresentacao } from "../components/apresentacao/apresentacao";
import { Skills } from "../components/skills/skills";
import { Info } from "../components/informacoes/informacoes";


export const Home = () => {
    const [dark,setDark] = useState(true)


    return (
        <>
            <Header dark={dark} setDark={() => setDark(!dark)} />
            <div style={ dark ? { background: '#F5EED4', color: 'black'} : {background: '#39324d', color: 'white'}} className="container-home">
                <Apresentacao />
                <Skills />
                <Info dark={dark}/>
            </div> 
        </>
    )
}