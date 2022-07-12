import React from 'react';
import axios from 'axios';
import {useState} from 'react';

function PokeSearch(props) {
    const {score} = props;
    const [pokedata,setPokedata] = useState({"types":[{"type":{"name":""}}], 'sprites':{'back_default':''}})
    const [pokemonEntry,setPokemonEntry] = useState([])
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonEntry}`
    const searchPokemon = (event) => {
        if(event.key == 'Enter') {
            axios.get(url).then((response) => {
                setPokedata(response.data)
                console.log(pokedata)
            })
        }
    }

    const searchstyle = ` PokeSearch PokeSearch ${pokedata.types[0].type.name}`
    const cardstyle = ` poke-results-card poke-results-card-${pokedata.types[0].type.name}`
    const idstyle = `poke-search-id id-${pokedata.types[0].type.name}`
    const imagestyle = {
        backgroundImage: 'url(' + pokedata.sprites.back_default + ')',
        backgroundSize: '20%',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: '450px'
    }
  return (
    <div className={searchstyle}>
        <input 
        value={pokemonEntry}
        onChange={event=>setPokemonEntry(event.target.value)}
        onKeyPress={searchPokemon}
        placeholder='Type in Pokemon Name!'
        type='text'>
        </input>
    <div className='Poke-results'>
        <div className={cardstyle}>
        {pokedata.name ? <h1 className='poke-name'>{pokedata.name}</h1>:null}
        {pokedata.sprites.other ? <img style={imagestyle} src={pokedata.sprites.other.dream_world.front_default}/>:null}
        
        {pokedata.id ? <p className={idstyle}>#{pokedata.id}</p>:null}

        <div className='poke-card-geninfo'>
        <div className='poke-height'>
        <h3>Height</h3>
        {pokedata.height? <p>{Math.floor((pokedata.height/10)*3.28)}ft</p>:null}
        {pokedata.height? <p>{pokedata.height/10}m</p>:null}
        </div>
        <div className='poke-weight'>
        <h3>Weight</h3>{pokedata.weight ? <p>{((pokedata.weight/10)*2.2).toFixed(1)}lbs</p>:null}
        {pokedata.weight ? <p>{pokedata.weight/10}kgs</p>:null}
        </div>
        </div>
        <div class="poke-card-stats">
                <div className='poke-hp'>
                <h3>HP</h3>{pokedata.stats ? <p>{pokedata.stats[0].base_stat}</p>:null}
                </div>
                <div className='poke-attack'>
                <h3>Attack</h3>{pokedata.stats ? <p>{pokedata.stats[1].base_stat}</p>:null}
                </div>
            <div className='poke-defense'>
                <h3>Defense</h3>{pokedata.stats ? <p>{pokedata.stats[2].base_stat}</p>:null}
            </div>
            <div className='poke-special-attack'>
                <h3>Special Attack</h3>{pokedata.stats ? <p>{pokedata.stats[3].base_stat}</p>:null}
                </div>
            <div className='poke-special-defense'>
            <h3>Special Defense</h3>{pokedata.stats ? <p>{pokedata.stats[4].base_stat}</p>:null}
            </div>
            <div className='poke-speed'>
            <h3>Speed</h3>{pokedata.stats ? <p>{pokedata.stats[5].base_stat}</p>:null}
            </div>
        </div>
    </div>
    </div>
    
    </div>
  )
}

export default PokeSearch