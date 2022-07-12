import React from 'react'

function PokeContext() {
let imgArr = document.querySelectorAll(".imgtype");
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;


document.addEventListener("mousemove",function(e){
  mousePos(e);
})

function mousePos(e){
  moveXAmount = e.pageX - prevX;
  moveYAmount = e.pageY - prevY;

  moveImg(moveXAmount, moveYAmount);

  prevX = e.pageX;
  prevY = e.pageY;

}

function moveImg(xAmount, yAmount){

  imgArr.forEach(function(img){
    let movementStrength = 5 + (Math.random() * 15);

    img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
    img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";

  })
}
  return (
      <div className='poke-wrapper'>
    <div className='pokecontext'>
        <div className='colorballs'>
        <div className='blueball'/><div className='redball'/><div className='yellowball'/><div className='greenball'/>
        </div>
        <img alt='poke ball' className='pokedexball'src={require('./assets/pokeball.png')}/>
        <div class="arrow-right"></div>
        <div className='pokedex-main'>
        <img  src={require('./assets/bugtype.png')} alt='bug type'/><p>Bug-type Pokémon are characterized by their fast growing, they don't take long to evolve. Bug-type Pokémon live mostly (not all of them) in forests, some of them are a little harder to find because they live atop the trees.</p>
        <img  src={require('./assets/electrictype.png')} alt='electric type'/><p>The Electric type is a type of Pokémon that have electricity-oriented powers. They possess electro-kinetic abilities, being able to control, store, or even produce electricity.</p>
        <img  src={require('./assets/fairytype.png')} alt='fairy type'/><p>Fairy-type Pokémon are generally considered "cute" and "elegant" and tend to be at least partially pink in color and feminine in appearance overall</p>
        <img  src={require('./assets/firetype.png')} alt='fire type'/><p>Fire Pokémon have notably fewer species compared to the other Starter types, due to a lack of natural phenomena that can be described as fire - the Slugma line, Numel line, Magmar line, Torkoal, and Volcanion are the closest representation.</p>
        <img  src={require('./assets/ghosttype.png')} alt='ghost type'/><p>Ghosts are rare Pokémon, and the only type to have two immunities. In total there are just 34 Ghost type Pokémon (not including Megas/Formes), slightly above Ice.</p>
        <img  src={require('./assets/grasstype.png')} alt='grass type'/><p>Grass is one of the three basic elemental types along with Fire and Water, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players.</p>
        <img  src={require('./assets/normaltype.png')} alt='normal type'/><p>The Normal type is the most basic type of Pokémon. They are very common and appear from the very first route you visit. Most Normal Pokémon are single type, but there is a large contingent having a second type of Flying. Pokémon X/Y add several Normal dual-type Pokémon.</p>
        <img  src={require('./assets/poisontype.png')} alt='poison type'/><p> Poison type is regarded as one of the weakest offensively. Prior to Pokémon X/Y it was super-effective only against Grass (many of which are dual Poison so neutralizes the effect). </p>
        <img  src={require('./assets/rocktype.png')} alt='rock type'/><p>Rock is a solid type as one might expect. Like Steel, Rock Pokémon usually have high defense - however, since many Rock Pokémon are part Ground they have a 4x weakness to both Grass and Water whose moves often come as Special type.</p>
        <img  src={require('./assets/watertype.png')} alt='water type'/><p>Water is one of the three basic elemental types along with Fire and Grass, which constitute the three starter Pokémon. This creates a simple triangle to explain the type concept easily to new players. </p>
        <img  src={require('./assets/darktype.png')} alt='dark type'/><p>The Dark type was introduced in the second generation of Pokémon games as a measure to balance the types. In particular, its resistance to Psychic cut down that type's advantage by a long way.</p>
        <img  src={require('./assets/dragontype.png')} alt='dragon type'/><p>Dragons are among the most elusive and powerful of all Pokémon. Nine legendary Pokémon are part Dragon type and four have legendary-like stats.
They are notoriously difficult to train due to requiring more EXP points per level than most non-legendary Pokémon, and the fact they evolve much later and thus are in their weaker forms for longer.</p>
        <img  src={require('./assets/fightingtype.png')} alt='fighting type'/><p>Fighting Pokémon are strong and muscle-bound, often based on martial artists. Fighting moves are super-effective against five other types (as is Ground), making them very good offensively. Most Fighting type moves are in the Physical category, for obvious reasons.</p>
        <img  src={require('./assets/flyingtype.png')} alt='flying type'/><p>Most Flying type Pokémon are based on birds or insects, along with some mythical creatures like dragons. On average they are faster than any other type.
Nearly every Flying type has Flying as the secondary type, usually with Normal. </p>
        <img  src={require('./assets/groundtype.png')} alt='ground type'/><p>Ground is one of the strongest types offensively: it is super-effective against five other types (as is Fighting) and Earthquake is one of the strongest moves in the game with power and accuracy both 100.</p>
        <img  src={require('./assets/icetype.png')} alt='ice type'/><p>Ice type Pokémon are now the rarest of all types: there are only around 60 in total (depending on how you count alternate forms or mega evolutions). They are ranked quite well defensively in terms of stats, although multiple type weaknesses let them down. </p>
        <img  src={require('./assets/steeltype.png')} alt='steel type'/><p>The Steel type was introduced in the second generation of Pokémon games. It is the strongest type defensively, with 10 types being not very effective against it and the Poison type having no effect.</p>
        <img  src={require('./assets/psychictype.png')} alt='psychic type'/><p>The Psychic type has few outright strengths, however, it also has few weaknesses. In the first generation it ended up being massively overpowered, mainly due to a complete lack of powerful Bug moves, its only weakness.</p>
        </div>
        <div className='controlcenter'>
        <div className='arrowimg'><img src={require('./assets/arrowpad.png')}/></div>
        <div className='pokedex-desc'><p>Each type has its own strengths and weaknesses, most of which are logical setups. Fire-type Pokémon are weak against Water-type Pokémon, Water-type Pokémon are weak against Electric-type Pokémon, etc. These matchups also apply to the types of moves as well: A Fire-type move such as Ember will be strong against a Grass-type Pokémon such as Bulbasaur. Some types of Pokémon are also immune to a certain type of moves, regardless of its attack power, such as using an offensive Ghost-type move on a Normal-type Pokémon.</p></div>
        <img alt = 'x button'  className='x-button' src={require('./assets/xbutton.png')}/><img alt='check button' className='check-button' src={require('./assets/checkbutton.png')}/>
        </div>
    </div>
    </div>
  )
}

export default PokeContext