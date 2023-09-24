import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Layout } from './layout/Layout';
import { TodoList } from './pages/TodoList/TodoList';
import { TodoForm } from './pages/TodoForm/TodoForm';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<TodoList />}></Route>
          <Route path="/todo" element={<TodoForm />}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
