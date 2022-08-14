import React from "react"
import Header from "../components/header";
import { getPokemon } from "../services/getPokemon";
import Loading from "../components/loading";
import "../style/pokemon.css"

class Pokemon extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading: 'true',      
            img: null,
            name: "",
            types: [],
            atk: 0,
            spatk: 0,
            def: 0,
            spdef: 0,
            hp: 0,
            spd: 0,
            type1: "none",
            type2: "none"
        };
    }

    async loadPokemon(){
        const filter = window.location.href.split("/");
        let pokeInfo = await getPokemon(filter[4])
        let img = pokeInfo.sprites.other["official-artwork"].front_default

        this.setState({hp: pokeInfo.stats[0].base_stat})
        this.setState({atk: pokeInfo.stats[1].base_stat})
        this.setState({def: pokeInfo.stats[2].base_stat})
        this.setState({spatk: pokeInfo.stats[3].base_stat})
        this.setState({spdef: pokeInfo.stats[4].base_stat})
        this.setState({spd: pokeInfo.stats[5].base_stat})
        
        this.setState({type1: pokeInfo.types[0].type.name})
        if(pokeInfo.types.length > 1){
            this.setState({type2: pokeInfo.types[1].type.name})
        }


        this.setState({name: pokeInfo.name.replace(/-/g, " "), img: img})
        this.setState({isLoading: false});
    }
    
    componentDidMount(){
        this.loadPokemon();
    }

    render() {
        return ( 
            <>
               
                <Header/>
                {this.state.isLoading 
                    ? <Loading/> 
                    :(  
                        <section>
                        <h2 className="pokeName">{this.state.name}</h2>
                        <div className="overview">
                            <img src={this.state.img}/>
                            <div className="stats">
                                <ul>
                                    <li className={this.state.type1}>{this.state.type1}</li>
                                    {this.state.type2 !== "none" && 
                                        <li className={this.state.type2}>{this.state.type2}</li>}
                                </ul>
                                <div className="attributes">
                                    <div>
                                        <span>HP:</span>
                                        <p style={
                                            {
                                                // backgroundColor: "green",
                                                width: Math.round(this.state.hp/300*400)+"px"
                                            }
                                            }>{this.state.hp}
                                        </p>
                                    </div>
                                    <div>
                                        <span>Attack:</span>
                                        <p style={
                                            {
                                                // backgroundColor: "red",
                                                width: Math.round(this.state.atk/300*400)+"px"
                                            }
                                            }>{this.state.atk}
                                        </p>
                                    </div>
                                    <div>
                                        <span>Defense:</span>
                                        <p style={
                                            {
                                                // backgroundColor: "blue",
                                                width: Math.round(this.state.def/300*400)+"px"
                                            }
                                            }>{this.state.def}
                                        </p>
                                    </div>
                                    <div>
                                        <span>Sp. Attack:</span>
                                        <p style={
                                            {
                                                // backgroundColor: "violet",
                                                width: Math.round(this.state.spatk/300*400)+"px"
                                            }
                                            }>{this.state.spatk}
                                        </p>
                                    </div>
                                    <div>
                                        <span>Sp. Defense:</span>
                                        <p style={
                                            {
                                                // backgroundColor: "yellow",
                                                width: Math.round(this.state.spdef/300*400)
                                            }
                                            }>{this.state.spdef}
                                        </p>
                                    </div>
                                    <div>
                                        <span>Speed:</span>
                                        <p style={
                                            {
                                                // backgroundColor: "orange",
                                                width: Math.round(this.state.spd/300*400)
                                            }
                                            }>{this.state.spd}
                                        </p>
                                    </div>    
                                </div>
                                
                            </div>
                        </div>
                        </section>
                     )               
            
                }
            </>
            
                
                        
        )
    }

}

export default Pokemon