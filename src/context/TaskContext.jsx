import { createContext,useState, useEffect } from "react"

export const TaskContext = createContext()

export function TaskContextProvider(props){

  const useTasks = () => {
    const [tasks, setTasks] = useState(window.localStorage.getItem('tasksData') !== null ? JSON.parse(window.localStorage.getItem('tasksData')) : [])

    useEffect(() => {
      window.localStorage.setItem('tasksData', JSON.stringify(tasks))
    }, [tasks])

    const createTask = task => {
      setTasks([...tasks, {
        title: task.title,
        description: task.description,
        id: tasks.length
      }])
    }

    const deleteTask = taskId => {
      const fixedTasks = tasks.filter(task => task.id !== taskId).map((task, index) => {
        if (task.id < taskId) return task

        return {
          ...task,
          id: index
        }
      })
      setTasks(fixedTasks)
    }

    return {
      tasks,
      createTask,
      deleteTask
    }
  }

  const {tasks, createTask, deleteTask} = useTasks();

  return (
      <TaskContext.Provider value={{
        tasks,
        createTask,
        deleteTask
      }}>
          {props.children}
      </TaskContext.Provider>
  )
}