import React from "react";
import Header from "../components/header";
import pokedex from '../images/pokedex.png'
import '../style/home.css'
import {Link} from 'react-router-dom'

class Home extends React.Component{
    
    render() {
        return ( 
            <>
            <Header/>
            <article>
                <img src={pokedex} width="200px"/>
                <p>O <strong>Tallgrass</strong>, é um projeto com fins acadêmicos inspirado na pokedex que 
                    desenvolvido durante a disciplina de Programação para WEB ofertada pela UNIPAMPA
                    durante o semestre 2022/1. <br/>O Tallgrass oferece funcionalidades para pesquisar e filtrar 
                    pokemons de todas as gerações lançadas até o momento 12/07/2022, a aplicação consome dados 
                    da API RESTful <a href="https://pokeapi.co/">POKÉAPI</a>.</p>
            </article>
            </>
        )
    }
}

export default Home