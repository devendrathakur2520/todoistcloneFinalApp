import { SET_ARCHIVED, SET_PROJECT,SET_PROJECT_NAME } from "../actions";
const initialState = {
    projectName : '',
   
   }
   
   export default function projectNames (state = initialState, action) {
  
     switch (action.type) {
       case SET_PROJECT_NAME:
         return {
           ...state,
         projectName : action.payload,
         };
         default:
       return state;
   }
 }