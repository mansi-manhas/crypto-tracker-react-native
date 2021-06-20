/* going to use axios instead of native fetch api, as it offers better options,
   better api, better error handling 
   THIS IS AN ACTION, thus exporting only function
*/
import axios from 'axios'
import {
    FETCHING_COIN_DATA,
    FETCHING_COIN_DATA_SUCCESS,
} from './../Utils/ActionTypes'
import { apiBaseURL } from './../Utils/Constants'

export default function FetchCoinData() {
    /* now we will return a thunk action here, which is also a function 
       using thunk action gives us more control
    */
    return dispatch => {
        console.log("payload");
        dispatch({type: FETCHING_COIN_DATA})
        return axios.get(`${apiBaseURL}v2/assets?limit=10`)
            .then(res => {
                dispatch({ type: FETCHING_COIN_DATA_SUCCESS, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCHING_COIN_DATA_FAIL, payload: err.data })
            })
        
    }


}