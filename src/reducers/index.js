import { combineReducers } from "redux";

import gamereducers from './games';

//  const initialstate = {
//      name: '',
//      isloged : ''
//  }

// const userreducer = (state= initialstate , action) => {
//   switch(action.type){
//    default :
//    return {...state}

//   }

// };

const rootreducer = combineReducers(
{
    gamereducer: gamereducers,
    // user : userreducer
}
    
)

export default rootreducer;