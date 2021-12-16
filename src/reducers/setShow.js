
import { SET_SHOW, SET_TASK } from "../actions";
const initialState = {
    show:false,
   
   }
   
   export default function shows (state = initialState, action) {
       console.log("hjfjlkfhjrmumrjpppp",state);
  
     switch (action.type) {
       case SET_SHOW:
         return {
           ...state,
         show : action.payload,
         };
         default:
       return state;
   }
 }