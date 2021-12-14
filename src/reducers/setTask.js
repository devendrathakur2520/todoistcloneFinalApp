
  
import { SET_TASK } from "../actions";
const initialState = {
    task:[],
   
   }
   
   export default function tasks (state = initialState, action) {
  
     switch (action.type) {
       case SET_TASK:
         return {
           ...state,
         task : action.payload,
         };
         default:
       return state;
   }
 }