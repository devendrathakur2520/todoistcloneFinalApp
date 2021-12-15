import { useState } from "react";
import {FaTrashAlt} from 'react-icons/fa';
import { useProjectsValue,useSelectedProjectValue } from "../../context";
import { firebase } from "../../firebase";
import React from 'react'
import { setProjects } from "../../actions";

export const IndividualProject =({project})=> {
    const [showConfirm,setShowConfirm] = useState(false);
    const [projects,setProjects] = useProjectsValue(false);
    const [selectedProject,setSelectedProject] = useSelectedProjectValue();
   
    const deleteProject = docId => {
        firebase
        .firestore()
        .collection('projects')
        .docId(docId)
        .delete()
        .then(()=>{
            setProjects([...projects])
            setSelectedProject('INBOX');
        })
    }
    return (
        <div>
            <span className ="sidebar__dot">.</span>
            <span className ="sidebar__project-name">{project.name}</span>
            <span className ="sidebar__project-delete">delete</span>
        </div>
    )
}
