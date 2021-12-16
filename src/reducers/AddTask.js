
import { ADD_TASK, SET_TASK } from "../actions";
const initialState = {
    task: '',
   
   }
   
   export default function addTasks (state = initialState, action) {
  
     switch (action.type) {
       case ADD_TASK:
         return {
           ...state,
         task : action.payload,
         };
         default:
       return state;
   }
 }