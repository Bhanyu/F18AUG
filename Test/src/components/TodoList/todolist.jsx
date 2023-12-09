import { useState } from "react"

const TodoList = ()=>{
    const [ tasks, setTasks] = useState([ ])
    const [ newTask, setNewTasks ] = useState(" ")

    const addTask = ()=>{
        if(newTask.trim() !== " "){
            setTasks([...tasks, newTask])
            setNewTasks("")
        }
    }
    const deleteBtn = (index)=>{
        const updateTask = [...tasks]
        updateTask.splice(index,1)
        setTasks(updateTask)
    }
    return(
        <>
        <h1 className='header'>Todo List</h1>
        <form className='new-item-form'>
        
      <input value={newTask} onChange={e => setNewTasks(e.target.value)} type="text" id='item' />
      <button className='btn' onClick={addTask}>Add</button>
        </form>
      
      <ul className='list'>
   
            {
        tasks.map((task,index)=>{
           return(
            <li key={index}>
            {task}
            <button onClick={()=>{deleteBtn(index)}}>Delete</button>
        </li>
                    
           )
           

        })
     }
        
  
      
        
      </ul>
      </>
      )
}
export default TodoList