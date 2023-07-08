import React, { useState } from "react";
import "./home.css"
import { Header } from "../components/header/header";
import { Apresentacao } from "../components/apresentacao/apresentacao";


export const Home = () => {
    const [dark,setDark] = useState(true)


    return (
        <div style={ dark ? { background: '#F5EED4'} : {background: '#39324d'}} className="container-home">

            <Header dark={dark} setDark={() => setDark(!dark)} />
            <Apresentacao/>
        </div>
    )
}