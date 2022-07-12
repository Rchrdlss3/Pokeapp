import { useState,useEffect } from 'react';
import './components/main.css';
import PokemonCard from './components/PokemonCard';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import PokeContext from './components/PokeContext';
import PokeSearch from './components/PokeSearch';
import Welcome from './components/Welcome';
function App() {

  const [allPokemons,setAllPokemons] = useState([])
  const [loadMore,setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=24')
  
  const getAllPokemons = async () => {
    const res = await fetch(loadMore)
    const data = await res.json()
    
    setLoadMore(data.next)

    function createPokemonObject (result) {
      result.forEach(async(pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        const data = await res.json()
        setAllPokemons(currentList => [...currentList,data])
      })
    }
    await console.log(allPokemons)
    createPokemonObject(data.results)
  }
  
  useEffect(()=>{
    getAllPokemons();
  },[])

  return (
    <Router>
    <div className="app-container">
      <Navbar />
      <div className="content">
      <Switch>
        <Route exact path="/">
      <div className='poke-container'>
        <Welcome />
        {allPokemons.map((pokemon,index) => 
          <PokemonCard
          id = {pokemon.id}
          name={pokemon.name}
          image={pokemon.sprites.other.dream_world.front_default}
          type={pokemon.types[0].type.name}
          key={index}
          />
          )}
        </div>
        <button className='load-more' onClick={()=>getAllPokemons()}><img src={require('./components/assets/pokeball.png')} /></button>
        </Route>
        <Route exact path='/pokecontext'>
        <PokeContext />
        </Route>
        <Route exact path=''>
          <PokeSearch/>
        </Route>
        </Switch>
        </div>
      
    </div>
    </Router>
  );
}

export default App;
