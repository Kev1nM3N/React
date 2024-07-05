import React from 'react'
import tarotBackDesign from '../assets/Tarot back design.jpg'
import deathArcanaCover from '../assets/Death.jpg'
import Footer from './Footer'

function Main({toggleModal}) {

  return (
    <>
        <main>
            <div className="main__header">
                <h2>The Rider-Watie Smith Deck</h2>

                <select name="" id="filter" onChange={null}>
                    <option value="">All</option>
                    <option value="MAJOR">Major Arcana</option>
                    <option value="MINOR">Minor Arcana</option>
                    <option value="FACE">Face Cards</option>
                </select>
            </div>

            {/* <div className="loading__background">
                <i className="fa-solid fa-spinner"></i>
            </div> */}

            <div className="container">
                <div className="row">
                <div className="card__list">
                    <div className="card">
                        <figure className="card__img--wrapper">
                            <img src={tarotBackDesign} alt="" className="tarot__frontimg"/>
                            <img src={deathArcanaCover} alt="" className="tarot__backimg"/>
                        </figure>
        
                        <p className="tarot__name">Death</p>
                        <p className="tarot__category">Major Arcana</p>
                        <p className="tarot__number">13</p>
                    </div>
                </div>
                </div>
            </div>
        </main>
        <Footer toggleModal={toggleModal}/>
    </>
  )
}

export default Main