import React from 'react'
import { useRecoilValue } from 'recoil';
import { todoListStatsState } from '../todoAtoms';

const TodoListStats = () => {
    const { totalNum, 
            totalCompletedNum,
            totalIncompletedNum, 
            percentCompleted
        } = useRecoilValue(todoListStatsState);
    
    const formattedPercentCompleted = 
        Math.round(percentCompleted * 100);
  return (
    <div>
        <ul>
            <li>Total Items {totalNum}</li>
            <li>Item Completed {totalCompletedNum}</li>
            <li>Item Not Completed {totalIncompletedNum}</li>
            <li>Completed Percent {formattedPercentCompleted}</li>
        </ul>
    </div>
  )
}

export default TodoListStats