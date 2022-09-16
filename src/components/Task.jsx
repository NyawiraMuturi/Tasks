import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className='bg-sky-500/50 my-3 py-2 px-4 rounded cursor-pointer' onDoubleClick={() => onToggle(task.id)}>
        <div className='flex justify-between ' >
            <h3>{task.text} </h3>
            <DeleteIcon 
            className='text-red-500 cursor-pointer' 
            onClick={()=>onDelete(task.id)}/> 
        </div>
        
        <p>{task.day}</p>
    </div>
  )
}

export default Task