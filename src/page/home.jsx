import React, { useState } from "react";
import "./home.css"
import { Header } from "../components/header/header";
import { Apresentacao } from "../components/apresentacao/apresentacao";
import { Skills } from "../components/skills/skills";


export const Home = () => {
    const [dark,setDark] = useState(true)


    return (
        <div style={ dark ? { background: '#F5EED4', color: 'black'} : {background: '#39324d', color: 'white'}} className="container-home">

            <Header dark={dark} setDark={() => setDark(!dark)} />
            <Apresentacao dark={dark} setDark={() => setDark(!dark)} />
            <Skills dark={dark} setDark={ () => setDark(!dark)} />
        </div>
    )
}