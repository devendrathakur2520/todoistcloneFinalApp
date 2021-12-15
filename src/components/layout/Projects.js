import React from 'react'
import { useState } from 'react'
import { useProjectsValue, useSelectedProjectValue } from '../../context';
import { IndividualProject, InduvisualProject } from './IndividualProject';

export const Projects = ({ activeValue = null }) => {
    const [active, setActive] = useState(activeValue);
    const { setSelectedProject } = useSelectedProjectValue();
    const  projects = useProjectsValue();
    console.log("iiiiiiiii", projects);

    return (
        <div>
            {projects &&
                projects.map(project => (
                    <li
                        key={project.projectId}
                        data-doc-id={project.docId}
                        data-testid="project-ation"
                        role="button"
                        className={
                            active === project.projectId
                                ? 'active sidebar__project'
                                : 'sidebar__project'
                        }
                        onKeyDown={() => {
                            setActive(project.projectId);
                            setSelectedProject(project.projectId);
                        }}

                        onClick={() => {
                            setActive(project.projectId);
                            setSelectedProject(project.projectId);
                        }}
                    ><IndividualProject project={project}/></li>
                ))
            }</div>

    )
}
