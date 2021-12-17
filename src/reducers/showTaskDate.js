
  
import { SHOW_PROJECT_OVERLAY, SHOW_TASK_DATE, TASK_DATE } from "../actions";
const initialState = {
    showTaskdate:'',
   
   }
   
   export default function showTaskdates (state = initialState, action) {
  
     switch (action.type) {
       case SHOW_TASK_DATE:
         return {
           ...state,
           showTaskdate : action.payload,
         };
         default:
       return state;
   }
 }