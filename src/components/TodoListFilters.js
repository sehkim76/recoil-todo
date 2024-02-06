import React from 'react'

const TodoListFilters = () => {
  return (
    <div>
        Filters:
        <select>
            <option value="Show All">Show All</option>
            <option value="Show Complted">Show Completed</option>
            <option value="Show Incompleted">Show Incompleted</option>
        </select>
    </div>
  )
}

export default TodoListFilters