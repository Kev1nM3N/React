import React from 'react'
import crystalBall from '../assets/tarot with crystal ball display.png'

function Home() {
  return (
    <header>
        <div className="header__left-side">
                <h1>Become familiar with the Tarot Cards!</h1>
                <p>An exciting understanding of yourself awaits! Tarot is the most popular divinity tool that can
                    forecast and offer interpretations in love, career and finance whereas yes/no tarot is
                     useful for answering users' questions in a fascinating way.
                </p>
                
                <div className="searchBox">
                    <input className="searchbar" type="search" placeholder="Ask a Question"/>
                    <button className="searchbarButton">Answer</button>
                </div>
            </div>

            <div className="header__right-side">
                <figure>
                    <img src={crystalBall} alt=""/>
                </figure>
            </div>
    </header>
  )
}

export default Home