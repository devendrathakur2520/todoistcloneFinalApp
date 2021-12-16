import { combineReducers } from 'redux';
import tasks from './setTask';
import Archiveds from './setArchived';
import projects from './setProjects';
import selectedprojects from './setSelectedProjects';
import shows from './setShow';
import showMains from './setShoMain';
import projectNames from './setProjectName';
import addTasks from './AddTask';

export default combineReducers({
 
   tasks,
   Archiveds,
   projects,
   selectedprojects,
   shows,
   showMains,
   projectNames,
   addTasks,

});