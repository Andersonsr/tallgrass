import React from "react"
import Loading from "./loading";
import Region from "./region";
import {getPokemonByRegion, getPokemonByType} from '../services/getPokemon'
import '../style/main.css'

class PokeList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            filter: props.filter,
            isLoading: false,
            regions: [],
            loading: true
              
        };
    }

    async loadList(){
        this.setState({isLoading: true});
        const regions = {
            'kanto' : ['kanto'],
            'johto' : ['original-johto'],
            'hoenn' : ['hoenn'],
            'sinnoh': ['original-sinnoh'],
            'unova' : ['original-unova'],
            'kalos' : ['kalos-central', 'kalos-coastal', 'kalos-mountain'],
            'alola' : ['original-alola', 'original-melemele', 'original-ulaula', 'original-poni'],
            'galar' : ['galar', 'isle-of-armor']
        }
        

        if (this.state.filter in regions){
            const region = regions[this.state.filter];
            if(this.state.regions.length === 0){
                for (let i=0; i<region.length; i++){
                    let result = await getPokemonByRegion(region[i]);
                    let aux = {name: region[i], list: result}
                    this.state.regions.push(aux)
                }
            
            }
            
        }
        else if (this.state.regions.length === 0){
            let result = await getPokemonByType(this.state.filter);
            let aux = {name: this.state.filter, list: result}
            this.state.regions.push(aux)
        }
        this.setState({isLoading: false});    
        
    }

    componentDidMount(){
            this.loadList();   
    }

    render(){
        let i = 0
        return(
            <div id="pokelist">
            {this.state.isLoading 
            ?   <Loading />
            : ( <ul >
                    {this.state.regions.map(({name, list}) =>(
                        <li key={i++} className="region">
                            <h2 className={this.state.filter}>{name.replace('-', ' ')}</h2>
                            <Region list={list}/>
                            
                        </li>        
                    ))}
                </ul> 
              )
            }
            
            
            </div>
        )
    }
}

export default PokeList
