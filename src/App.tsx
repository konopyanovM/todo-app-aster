import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { TodoList } from './pages/TodoList';
import { TodoForm } from './pages/TodoForm';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/todo-form/:id?" element={<TodoForm />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
