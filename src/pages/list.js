import React from "react"
import Header from "../components/header"
import PokeList from "../components/pokelist"
import '../style/main.css'

class List extends React.Component{
    render() {
        const filter = window.location.href.split("/");
        return ( 
            <>
                <Header/>
                <PokeList filter= {filter[4]}/>
            </>
            
        )
    }

}

export default List