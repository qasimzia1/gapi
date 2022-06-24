import React from 'react'
//styling and animation 
import styled from 'styled-components';
import {motion} from 'framer-motion';

//redux

import {useDispatch} from 'react-redux';
import {detaildata } from '../actions/gamedetailaction'


function Gamescard({name,released,image,id}) {

  const dispatch = useDispatch();

  const loaddetailhandler  = () => {
   dispatch(detaildata(id))

  }  
  return (
    <Styledgame onClick={loaddetailhandler}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
    </Styledgame>
  )
}

const Styledgame= styled(motion.div)`
min-height: 30vh;
box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
text-align: center;
border-radius: 1rem;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

`

export default Gamescard;