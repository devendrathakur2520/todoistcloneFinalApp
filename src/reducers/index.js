import { combineReducers } from 'redux';
import tasks from './setTask';
import Archiveds from './setArchived';
import projects from './setProjects';
import selectedprojects from './setSelectedProjects';
import shows from './setShow';
import showMains from './setShoMain';
export default combineReducers({
 
   tasks,
   Archiveds,
   projects,
   selectedprojects,
   shows,
   showMains,

});