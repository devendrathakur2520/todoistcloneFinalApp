import React from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setShowMain, setTask } from '../actions';
import { useState } from 'react';
import { generatePushId } from '../helpers';
import { useProjectsValue } from '../context';


export default function AddTask() {
    const dispatch = useDispatch()
    // const [show, setShow] = useState(shouldShow);
    const [project, setProject] = useState('');
    const show = useSelector(state => state.shows.show)
    const showMain = useSelector(state => state.showMains.showMain)
    const selectedProject = useSelector((state) => state.selectedprojects.selectedProject);
    console.log("hjfdhfjjppppppp", showMain);
    //  const [task, setTask] = useState('');
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
        task && projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    projectId,
                    task,
                    userId: 'admin@',
                })
                .then(() => {
                    // dispatch(setProjects([...projects]));
                    // setProjectName('');
                    dispatch(setShowMain(''));
                });

    }
    return (
        <div>
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
                            className="add-task__submit"
                            type="button"
                            onClick={() => addTask()}
                            data-testid="add-task-submit"
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
            </div>
        </div>
    )
}
