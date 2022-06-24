import axios from "axios";
import { gamedetailurl , gamescreenshoturl } from "../api";

export const detaildata = (id) => async (dispatch) => {
    const detaildata = await axios.get(gamedetailurl(id));
    const screenshotdetail = await axios.get(gamescreenshoturl(id));
    dispatch({
        type : 'get_detail',
        payload : {
            game : detaildata.data,
            screen : screenshotdetail.data,
        },
    });

    };

