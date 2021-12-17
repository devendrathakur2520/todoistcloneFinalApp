
  
import { TASK_DATE } from "../actions";
const initialState = {
    taskdate:'',
   
   }
   
   export default function taskDates (state = initialState, action) {
  
     switch (action.type) {
       case TASK_DATE:
         return {
           ...state,
         taskdate : action.payload,
         };
         default:
       return state;
   }
 }