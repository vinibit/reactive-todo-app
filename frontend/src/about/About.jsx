import React from "react"
import PageHeader from "../template/PageHeader"

const About = props => (
    <div>
        <PageHeader name="Sobre" small="Quem somos?"></PageHeader>
        <div className="container">

            <h2>Nossa História</h2>        
            <p>O nosso sistema foi criado...</p>
            
            <h2>Missão e Visão</h2>
            <p>Nossa missão é...</p>
            
            <h2 className="mt-2">Contato</h2>
            <p>Telefone: (00) 0000-0000</p>
            <p>Email: vinibit@gmail.com</p>

        </div>
    </div>
)

export default About