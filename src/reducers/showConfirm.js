
  
import { SHOW_CONFIRM, SHOW_PROJECT_OVERLAY, SHOW_TASK_DATE, TASK_DATE } from "../actions";
const initialState = {
    showconfirm:false,
   
   }
   
   export default function showConfirms (state = initialState, action) {
  
     switch (action.type) {
       case SHOW_CONFIRM:
         return {
           ...state,
           showconfirm : action.payload,
         };
         default:
       return state;
   }
 }