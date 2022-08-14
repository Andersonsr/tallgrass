import React from "react";

class Pokecard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            id: props.id,
            img: props.img,
            type1: props.type1,
            type2: props.type2
        };
    }

    render() {
        return (
            <>  
                <p>{this.state.id}</p>
                <img src={this.state.img}></img>
                
                <h3>{this.state.name}</h3>
                <ul>
                    <li class={this.state.type1}> {this.state.type1}</li>
                    { this.state.type2 != undefined &&
                        <li class={this.state.type2}>{this.state.type2}</li>
                    }
                </ul>
            </>
              
        )
    }
}

export default Pokecard