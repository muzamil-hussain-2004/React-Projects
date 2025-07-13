import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-700 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-center text-xl font-semibold mb-4">Learn about redux toolkit</h1>
        <AddTodo />
        <h2 className="text-center mt-4 mb-2 text-lg">Todos</h2>
        <Todos />
      </div>
    </div>
  )
}

export default App
