import { PROJECT, SET_ARCHIVED } from "../actions";
const initialState = {
   project :'',
   
   }
   
   export default function projectss  (state = initialState, action) {
  
     switch (action.type) {
       case  PROJECT:
         return {
           ...state,
         project : action.payload,
         };
         default:
       return state;
   }
 }