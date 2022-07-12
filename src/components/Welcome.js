import React from 'react'

function Welcome() {
  return (
    <div className='Welcome'>
        <img src={require('./assets/welcome.png')}/>
        <ul>

            <li><a href={require("./Richard.Ulysse.Resume.pdf")} download='Richard.Ulysse.Resume.pdf'><img src={require('./assets/resume.png')}/>Resume</a></li>
            <li><a href='https://www.linkedin.com/in/richard-ulysse-072012152/' target='_blank'><img src={require('./assets/linkedin.png')}/>LinkedIn</a></li>
        </ul>
        <details>
            <summary>Looking for a specific Pokemon?</summary>
            <p>You can click on the PokeSearch button in the navigation bar which will lead you to that Pokemon and more info</p>
        </details>
        <details>
            <summary>Unsure on each symbol?</summary>
            <p> You can check the Table of Content </p>
        </details>
        <details>
            <summary>Want more Pokemon?</summary>
            <p>You can scroll down to end of the list of cards and click on the pokeball to load more.</p>
        </details>
        
        
    </div>
  )
}

export default Welcome