import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";


function App() {

  const [tasks, setTasks] = useState([ 
    {
        id: 1, 
        text: "Go Home",
        day: "10th Feb at 10:30am", 
        reminder: true, 
    }, 

    {
        id: 2, 
        text: "Go For drinks with new friends",
        day: "10th Feb at 10:30am", 
        reminder: true, 
    }, 

    {
        id: 3, 
        text: "Go to Dentist",
        day: "10th Feb at 10:30am", 
        reminder: true, 
    }
])

const deleteTask = (id)=> {
  setTasks(tasks.filter((task) => task.id !== id ))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task)=> task.id === id? {...task, reminder : !task.reminder} : task ))
}

  return (
    <div className="border-1 border rounded p-5 w-1/2 m-auto mt-10">
      <Header/>
      {
        tasks.length > 0 ?
        <Tasks 
        tasks={tasks} 
        onDelete={deleteTask}
        onToggle={toggleReminder}/> : "No Tasks Available"
      }
      
    </div>
  );
}

export default App;
