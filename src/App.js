import './App.css';
import AddTodoForm from './components/AddTodoForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoItem from './components/TodoItem';
import TotalCompleteItems from './components/TotalCompleteItems';

function App() {

  return (
    <div className="container bg-white p-4 mt-5">
      <AddTodoForm />
      <TodoList />
      <TotalCompleteItems />
    </div>
  );
}

export default App;
