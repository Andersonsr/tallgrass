import React from 'react';
import '../style/header.css'

class Header extends React.Component{
    render() {
        return (
            <>               
                <nav>
                    <ul>
                        <a href="/list/kanto"><li>Kanto</li></a>
                        <a href="/list/johto"><li>Johto</li></a>
                        <a href="/list/hoenn"><li>Hoenn</li></a>
                        <a href="/list/sinnoh"><li>Sinnoh</li></a>
                        <a href="/list/unova"><li>Unova</li></a>
                        <a href="/list/kalos"><li>Kalos</li></a>
                        <a href="/list/alola"><li>Alola</li></a>
                        <a href="/list/galar"><li>Galar</li></a>
                    </ul>     
                </nav>
                
                <div id="types">
                    <ul>
                        <a href="/list/normal"><li className="normal">normal</li></a>
                        <a href="/list/fighting"><li className="fighting">fighting</li></a>
                        <a href="/list/flying"><li className="flying">flying</li></a>
                        <a href="/list/poison"><li className="poison">poison</li></a>
                        <a href="/list/ground"><li className="ground">ground</li></a>
                        <a href="/list/rock"><li className="rock">rock</li></a>
                        <a href="/list/bug"><li className="bug">bug</li></a>
                        <a href="/list/ghost"><li className="ghost">ghost</li></a>
                        <a href="/list/steel"><li className="steel">steel</li></a>
                        <a href="/list/fire"><li className="fire">fire</li></a>
                        <a href="/list/water"><li className="water">water</li></a>
                        <a href="/list/grass"><li className="grass">grass</li></a>
                        <a href="/list/electric"><li className="electric">eletric</li></a>
                        <a href="/list/psychic"><li className="psychic">psychic</li></a>
                        <a href="/list/ice"><li className="ice">ice</li></a>
                        <a href="/list/dragon"><li className="dragon">dragon</li></a>
                        <a href="/list/dark"><li className="dark">dark</li></a>
                        <a href="/list/fairy"><li className="fairy">fairy</li></a>
                    </ul>
                </div>

                <div id="search">
                    <button>Buscar</button>
                    <input id="busca" type="text" placeholder="pokemon, movimento, item..."></input> 
                </div>
            </>

            
        )
    }
}

export default Header