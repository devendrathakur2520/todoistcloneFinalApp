
import {  SET_SHOW_MAIN } from "../actions";
const initialState = {
    showMain:false,
   
   }
   
   export default function showMains (state = initialState, action) {
       console.log("hjfjlkfhjrmumrj",state);
  
     switch (action.type) {
       case SET_SHOW_MAIN:
         return {
           ...state,
         showMain : action.payload,
         };
         default:
       return state;
   }
 }