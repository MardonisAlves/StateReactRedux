import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from '../todo/todo'
import Menu from '../template/menu'
import TableList from '../todo/tableList';
import TodoForms from '../todo/todoForms';
import '../main/main.css'

function App() {
  return (
    <div className="App">
        <Menu></Menu>
        <Todo></Todo>
        <TodoForms></TodoForms>
        <TableList></TableList>

    </div>
  );
}

export default App;
