export const SET_TASK = 'SET_TASK';
export const settask = (payload) => ({ type: SET_TASK, payload });
  
export const SET_ARCHIVED = 'SET_ARCHIVED';
export const setArchivedTasks = (payload) => ({ type: SET_ARCHIVED, payload });

export const SET_PROJECT = 'SET_PROJECT';
export const setProjects = (payload) => ({ type: SET_PROJECT, payload });

export const SET_SELECTEDPROJECT = 'SET_SELECTEDPROJECT';
export const setselectedProject = (payload) => ({ type: SET_SELECTEDPROJECT, payload });

export const SET_SHOW = 'SET_SHOW';
export const setShow = (payload) => ({ type: SET_SHOW, payload });

export const SET_SHOW_MAIN = 'SET_SHOW';
export const setShowMain = (payload) => ({ type: SET_SHOW_MAIN, payload });

export const SET_PROJECT_NAME = 'SET_PROJECT_NAME';
export const setProjectName = (payload) => ({ type: SET_PROJECT_NAME, payload });

export const ADD_TASK = 'ADD_TASK';
export const setTask = (payload) => ({ type: ADD_TASK, payload });

export const PROJECT = 'PROJECT';
export const setProject = (payload) => ({ type: PROJECT, payload });

export const TASK_DATE = 'TASK_DATE';
export const setTaskDate = (payload) => ({ type: TASK_DATE, payload });

export const SHOW_PROJECT_OVERLAY = 'SHOW_PROJECT_OVERLAY';
export const setShowProjectOverlay = (payload) => ({ type: SHOW_PROJECT_OVERLAY , payload });

export const SHOW_TASK_DATE = 'SHOW_TASK_DATE';
export const setShowTaskDate = (payload) => ({ type: SHOW_TASK_DATE, payload });

export const SHOW_CONFIRM = 'SHOW_CONFIRM';
export const setShowConfirm = (payload) => ({ type: SHOW_CONFIRM, payload });


export const  DARK_MODE= 'DARK_MODE';
export const  setDarkMode = (payload) => ({ type: DARK_MODE, payload });