import axios from "axios"
import {populargamesurl , upcominggamesurl , newgamesurl} from '../api'





export const  loadgame = () => async (dispatch) => {
     //fetch axios
     const populardata = await axios.get(populargamesurl());
     const newgamedata = await axios.get(newgamesurl());

     const upcominggamedata = await axios.get(upcominggamesurl());

     dispatch({
        type :  "fetch_games" ,
        payload : {
            popular: populardata.data.results,
            newgames:newgamedata.data.results,
            upcoming:upcominggamedata.data.results,

        },
     }) 
}