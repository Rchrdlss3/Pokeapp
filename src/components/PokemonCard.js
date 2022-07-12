import React from 'react'

const PokemonCard = ({id,name,image,type}) => {
    const style = `poke-card ${type}`

  return (
      <div className='pokemon-container'>
    <div className={style}>
        <div className='number'>
        </div>
            <img src={image} alt={name} />
        <div className='detail-wrapper'>
            <h2>{name}</h2>
            <small>{type} Type Pokemon</small>
            <div className='poketype-img'><img src={require(`./assets/${type}type.png`)} alt=''/></div>
            <small>#{id}</small>
        </div>
    </div>

    </div>
  )
}

export default PokemonCard