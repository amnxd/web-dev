import React from 'react'

const App = () => {
  return (
    <div>
      <form className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold mb-4">Notes App</h1>
        <input
          className="w-full max-w-md p-2 font-medium border border-gray-300 rounded mb-4"
          placeholder="Notes Heading"
        />
        <textarea
          className="w-full max-w-md font-medium p-2 border h-32 border-gray-300 rounded mb-4"
          placeholder="Write your notes here..."
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Save Note
        </button>
      </form>

    </div>
  )
}

export default App