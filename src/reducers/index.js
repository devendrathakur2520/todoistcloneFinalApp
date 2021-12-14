import { combineReducers } from 'redux';
import tasks from './setTask';
import Archiveds from './setArchived';
import projects from './setProjects';
import selectedprojects from './setSelectedProjects';

export default combineReducers({
 
   tasks,
   Archiveds,
   projects,
   selectedprojects

});