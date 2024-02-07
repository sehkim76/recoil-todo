import logo from './logo.svg';
import './App.css';
import TodoListStats from './components/TodoListStats';
import TodoListFilters from './components/TodoListFilters';
import TodoItemCreator from './components/TodoItemCreator';
import { useRecoilValue } from 'recoil';
import { filtereTodoListState, todoListState } from './todoAtoms';
import TodoItem from './components/TodoItem';

function App() {
  //const TodoList = useRecoilValue(todoListState);
  const filteredTodoList = useRecoilValue(filtereTodoListState);
  return (
    <div className="App">
      <TodoListStats/>
      <TodoListFilters/>
      <TodoItemCreator/>
      {
        filteredTodoList.map((todoItem) => (
          <TodoItem key={todoItem.id} item={todoItem}/>

        )

        )
      }
    </div>
  );
}

export default App;
