import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../todoAtoms'

const TodoItem = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState);
    const index = todoList.findIndex((listItem) => listItem === item);

    const toggleItemCompletion = () => {
        const newList = replaceItemAtIndex(todoList, index, {
            ...item,
            isComplete: !item.isComplete
        })
        setTodoList(newList);
    }
  return (
    <div>
        {item.text}
        <input type='checkbox' checked={item.isComplete} 
            onChange={toggleItemCompletion}/>
        <br/>
    </div>
  )
}

function replaceItemAtIndex(arr, index, newValue)
{
    return [...arr.slice(0,index), newValue, ...arr.slice(index + 1)]
}

export default TodoItem