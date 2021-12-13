import { collatedTasks } from "../constant"

export const  collatedTasksExits = selectproject => 
collatedTasks.find(task => task.key === selectproject)