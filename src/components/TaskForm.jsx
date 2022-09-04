import {useState, useContext} from 'react'
import {TaskContext} from '../context/TaskContext'
function TaskForm() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    createTask({
      title,
      description
    })
    setTitle('')
    setDescription('')
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h2 className='text-2xl font-bold text-white mb-3'>Create your task</h2>
        <input placeholder="Title"
        onChange={(e) => setTitle(e.target.value)} value={title} required className='bg-slate-300 p-3 w-full mb-2'/>
        <textarea placeholder='Description' onChange={(e) => setDescription(e.target.value)} value={description} required className='bg-slate-300 p-3 w-full mb-2'></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">
            Safe
        </button>
    </form>
    </div>
  )
  }

export default TaskForm