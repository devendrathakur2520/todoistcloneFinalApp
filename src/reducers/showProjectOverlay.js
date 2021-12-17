
  
import { SHOW_PROJECT_OVERLAY, TASK_DATE } from "../actions";
const initialState = {
    showProjectOverlay:false,
   
   }
   
   export default function showProjectOverlays (state = initialState, action) {
  
     switch (action.type) {
       case SHOW_PROJECT_OVERLAY:
         return {
           ...state,
         showProjectOverlay : action.payload,
         };
         default:
       return state;
   }
 }