import React from "react";
import Pokecard  from "./pokecard";

class Region extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list: props.list,
           
        }
    }

    render(){
        return (
            <ul className="sublist">
                {this.state.list.map(element => (
                    element.sprites.front_default !== null &&
                    (
                        <a href={"../pokemon/"+element.id}>
                        <li key={element.id} className="pokemini">
                        <Pokecard name={element.name.replace(/-/g ,' ')} 
                            id ={element.order} 
                            type1={element.types[0].type.name}
                            type2={element.types.length > 1 ? element.types[1].type.name : undefined} 
                            img={element.sprites.front_default}/>
                        </li>
                        </a>
                    )
                ))}        
                
            </ul>
            
        )
    }
}

export default Region