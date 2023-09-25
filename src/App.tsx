import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { TodoList } from './pages/TodoList';
import { TodoForm } from './pages/TodoForm';
import { TodoSettings } from './pages/TodoSettings';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/todo-form/:todoId?" element={<TodoForm />}></Route>
          <Route path="/settings" element={<TodoSettings />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
