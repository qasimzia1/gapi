

const initialstate = { game : {}, screen:{}};

const gamedetailred = (state = initialstate , action ) => {

    switch (action.type) {
        case  'get_detail' :
            return {
                ...state ,
                game : action.payload.game,
                screen : action.payload.screen,
            }
            default :
            return {...state}
    }
}
export default gamedetailred;