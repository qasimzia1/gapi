const initstate = {
    popular : [] ,
    newgames : [],
    upcoming : [],
    searched : []

}

const gamereducers =  (state= initstate , action) => {
  switch(action.type){
    case 'fetch_games':
        return {...state , popular: action.payload.popular , newgames: action.payload.newgames , upcoming: action.payload.upcoming }

        default : 
        return {...state}
  }
}


//action creater



export default gamereducers;