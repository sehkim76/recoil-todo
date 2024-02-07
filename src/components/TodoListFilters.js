import React from 'react'
import { todoListFilterState } from '../todoAtoms';
import { useRecoilState } from 'recoil';

const TodoListFilters = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const updateFilter = ({target : {value}}) => {
    setFilter(value)
  }

  return (
    <div>
        Filters:
        <select value={filter} onChange={updateFilter}>
            <option value="Show All">Show All</option>
            <option value="Show Completed">Show Completed</option>
            <option value="Show Incompleted">Show Incompleted</option>
        </select>
    </div>
  )
}

export default TodoListFilters