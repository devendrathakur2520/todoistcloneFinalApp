import { SET_ARCHIVED, SET_PROJECT } from "../actions";
const initialState = {
    project : null,
   
   }
   
   export default function projects (state = initialState, action) {
  
     switch (action.type) {
       case SET_PROJECT:
         return {
           ...state,
         project : action.payload,
         };
         default:
       return state;
   }
 }