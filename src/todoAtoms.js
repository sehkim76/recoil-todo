import { atom, selector } from "recoil";

export const todoListState = atom({
    key: 'todoListState',
    default: []
})

export const todoListFilterState = atom({
    key: 'todoListFilterState',
    default: 'Show All'
})

export const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
        const todoList = get(todoListState);
        const totalNum = todoList.length;
        console.log('todoList', todoList);
        const completedList = todoList.filter((item) => item.isComplete );
        console.log('completedList', completedList);
        const totalCompletedNum = completedList.length;
        console.log('totalCompletedNum', totalCompletedNum);


        const totalIncompletedNum = totalNum - totalCompletedNum;
        const percentCompleted = totalNum === 0 ? 
                        0 : 
                        totalCompletedNum / totalNum;
        return { totalNum, totalCompletedNum, 
            totalIncompletedNum, percentCompleted
        }
    }
})