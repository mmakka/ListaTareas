import React from 'react'

export default function TaskItem({task,toggleTask,clearTasks}) {
   
  return (
    <tr key={task.id}> 
    <td>
        {task.name}
        <input type='checkbox'
        checked={task.done}
        onChange={() => toggleTask(task)} />
        </td>
     </tr>
  )
}
