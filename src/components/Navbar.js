import React from 'react';
import {Link} from 'react-router-dom';
      /*<img src={Pikachu} alt='Pikachu'/>*/
import Pikachu from './assets/pikachu.png';

function Navbar() {
  return (
    <div className='navbar'>
      <nav className="navbar">
      <div className ="links">
      <img className='pikaimg' src={require('./assets/pikachu02.png')}/>
      <Link to="/pokecontext"><img src={require('./assets/pokedex.png')} className='navimg'/>Pokemon Keys</Link>
      <Link to="/pokesearch"><img src={require('./assets/search.png')} className='navimg'/>PokeSearch</Link>
      <Link to ="/"><img src={require('./assets/pokeb.png')} className='navimg'/>Home</Link>
      </div>
      </nav>
    </div>
  )
}

export default Navbar
