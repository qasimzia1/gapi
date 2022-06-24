import { combineReducers } from "redux";

import gamereducers from './games';
import gamedetailred from './gamedetailreducer'

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
    detail : gamedetailred,
}
    
)

export default rootreducer;