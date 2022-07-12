import React from 'react';

class Header extends React.Component{
    render() {
        return (
            <header background="">
                <nav>
                    <ul>
                        <a href="pokelist.html?kanto"><li>Kanto</li></a>
                        <a href="pokelist.html?johto"><li>Johto</li></a>
                        <a href="pokelist.html?hoenn"><li>Hoenn</li></a>
                        <a href="pokelist.html?sinnoh"><li>Sinnoh</li></a>
                        <a href="pokelist.html?unova"><li>Unova</li></a>
                        <a href="pokelist.html?kalos"><li>Kalos</li></a>
                        <a href="pokelist.html?alola"><li>Alola</li></a>
                        <a href="pokelist.html?galar"><li>Galar</li></a>
                    </ul>     
                </nav>
                
                <div id="types">
                    <ul>
                        <a href="pokelist.html?normal"><li class="normal">normal</li></a>
                        <a href="pokelist.html?fighting"><li class="fighting">fighting</li></a>
                        <a href="pokelist.html?flying"><li class="flying">flying</li></a>
                        <a href="pokelist.html?poison"><li class="poison">poison</li></a>
                        <a href="pokelist.html?ground"><li class="ground">ground</li></a>
                        <a href="pokelist.html?rock"><li class="rock">rock</li></a>
                        <a href="pokelist.html?bug"><li class="bug">bug</li></a>
                        <a href="pokelist.html?ghost"><li class="ghost">ghost</li></a>
                        <a href="pokelist.html?steel"><li class="steel">steel</li></a>
                        <a href="pokelist.html?fire"><li class="fire">fire</li></a>
                        <a href="pokelist.html?water"><li class="water">water</li></a>
                        <a href="pokelist.html?grass"><li class="grass">grass</li></a>
                        <a href="pokelist.html?electric"><li class="electric">eletric</li></a>
                        <a href="pokelist.html?psychic"><li class="psychic">psychic</li></a>
                        <a href="pokelist.html?ice"><li class="ice">ice</li></a>
                        <a href="pokelist.html?dragon"><li class="dragon">dragon</li></a>
                        <a href="pokelist.html?dark"><li class="dark">dark</li></a>
                        <a href="pokelist.html?fairy"><li class="fairy">fairy</li></a>
                    </ul>
                </div>

                <div id="search">
                    <button>Buscar</button>
                    <input id="busca" type="text" placeholder="pokemon, movimento, item..."></input> 
                </div>
            </header>
            
        )
    }
}

export default Header