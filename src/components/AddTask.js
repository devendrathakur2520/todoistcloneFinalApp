
import React from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setShowMain, setTask,setProject,setShowProjectOverlay} from '../actions';
import { useState } from 'react';
import {ProjectOverlay} from './ProjectOverlay';
import {TaskDate} from './TaskDate';
import {setShowTaskDate,setTaskDate } from '../actions';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';

export default function AddTask() {
    const dispatch = useDispatch()

  ;
    const project = useSelector(state => state.projectss.project)
    const showMain = useSelector(state => state.showMains.showMain)
    const selectedProject = useSelector((state) => state.selectedprojects.selectedProject);

  
    const taskDate = useSelector((state) => state.taskDates.taskdate);


    
     const ShowProjectOverlay = useSelector((state) => state.showProjectOverlays.showProjectOverlay);

 
    const showTaskDate = useSelector((state) => state.showTaskdates.showTaskdate);

    console.log("hjfdhfjjppppppp", showMain);
   
    const task = useSelector(state => state.addTasks.task)
    console.log("dsdsdfsdd", task);

    const projectId = generatePushId();
    const projects = useProjectsValue();

    const addTask = () => {


        const projectId = project || selectedProject;
        let collatedDate = '';

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
        }

        return (
            task && projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    archived: false,
                    projectId,
                    task,
                    date: collatedDate || taskDate,
                    userId: 'admin@',
                })
                .then(() => {
                    
                    dispatch(setShowMain(''));
                   dispatch( setTask(''));
                    dispatch(setProject(''));
                   dispatch( setShowMain(''));
                   dispatch( setShowProjectOverlay(false));
                })
        )

    }
    return (
        <div>
     
        <div className="add-task__main" data-testid="add-task-main">
            <div className="add-task__main" data-testid="add-task-main">
              <div data-testid="quick-add-task">
               
                <span
                  className="add-task__cancel-x"
                  data-testid="add-task-quick-cancel"
                  aria-label="Cancel adding task"
                  onClick={() => {
                    dispatch(setShowMain(false));
                    dispatch(setShowProjectOverlay(false));
                
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      dispatch(setShowMain(false));
                     dispatch (setShowProjectOverlay(false));
                     
                    }
                  } }
                  tabIndex={0}
                  role="button"
                >
                </span>
              </div>
    
          <ProjectOverlay
          showProjectOverlay={ShowProjectOverlay} />
          <TaskDate
          showTaskDate={showTaskDate}/>
          </div>
            <div className="add-task__main" data-testid="add-task__main">
                {showMain && (
                    <div className="add-task__input" data-testid="add-task-inner">
         <input
            className="add-task__content"
            aria-label="Enter your task"
            data-testid="add-task-content"
            type="text"
            value={task}
            onChange={(e) => dispatch(setTask(e.target.value))}
          />
          <button
            type="button"
            className="add-task__submit"
            data-testid="add-task"
            onClick={() =>addTask()
            
            }
          >
            Add Task
          </button>
          
                        <span
                            aria-label="Cancel adding task"
                            data-testid="hide-task-overlay"
                            className="add-task__cancel"
                            onClick={() => dispatch(setShowMain(false))}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') dispatch(setShowMain(false));
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            Cancel
                        </span>
                    </div>
                )}
                <span className="add-task__plus">+</span>
                <span
                    aria-label="Add task"
                    data-testid="add-task-action"
                    className="add-task__text"
                    onClick={() => dispatch(setShowMain(!showMain))}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') dispatch(setShowMain(!showMain));
                    }}
                    role="button"
                    tabIndex={0}
                >
                    Add Task
                </span>
                <span
                    className="add_task__project"
                    data-testid="show-task-date-overlay"
                    onClick={() => dispatch(setShowProjectOverlay(!ShowProjectOverlay))}
                >
                    <FaRegListAlt />
                </span>

                <span
                    className="add-task__date"
                    data-testid="show-task-date-overlay"
                    onClick={() => dispatch(setShowTaskDate(!showTaskDate))}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') dispatch(setShowTaskDate(!showTaskDate));
                    }}
                    tabIndex={0}
                    role="button"
                >
                    <FaRegCalendarAlt />
                </span>
            </div>
        </div>
        </div>
    )
                }
