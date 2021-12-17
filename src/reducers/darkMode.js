import { DARK_MODE, SET_ARCHIVED } from "../actions";
const initialState = {
    darkmode: false,
   
   }
   
   export default function themes (state = initialState, action) {
  
     switch (action.type) {
       case DARK_MODE:
         return {
           ...state,
         darkmode : action.payload,
         };
         default:
       return state;
   }
 }