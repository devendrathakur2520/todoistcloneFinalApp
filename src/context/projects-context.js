import React, { createContext, useContext } from 'react';
import { useProjects } from '../hooks';
import { setProjects } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

export const ProjectsContext = createContext();
export const ProjectsProvider = ({ children }) => {
    const dispatch = useDispatch()
    const projects = useSelector((state) => state.projects.project);

    return (
        <ProjectsContext.Provider value={projects, dispatch(setProjects())}>
            {children}
        </ProjectsContext.Provider>
    )

}

export const useProjectsValue = () => useContext(ProjectsContext);
