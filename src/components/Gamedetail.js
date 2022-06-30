import React from 'react'
import styled from 'styled-components';
import {motion} from 'framer-motion';

//redux

import {useSelector } from 'react-redux'



const Gamedetail  = () => {
    //const { screen, game} = useSelector((store) => store.detail);
    const { screen, game} = useSelector((store) => store.detail);
   
    return (
      <div className="card-shadow">
          <div className="detail">
              <div className="status">
                  <div className="raiting">
                      
                      <h3>{game.name}</h3>
                      <p>Rating: {game.rating}</p>
                  </div>
  
                  <div className="info">
                      <h3>Platforms</h3>
                      <div className="platforms">
                        {game.platforms.map((data) => (

                              <h3>{data.platform.name}</h3>
                        ))}
                       
                      </div>
                  </div>
              </div>
              <div className="media">
                  <img src={game.background_image} alt="image" />
              </div>
              <div className="gallery">
                  {screen.results.map((data) => 
                  <img src={screen.image}  key={screen.id} alt="game"  />
                  )}
              </div>
          </div>
      </div>
    )
}


export default Gamedetail