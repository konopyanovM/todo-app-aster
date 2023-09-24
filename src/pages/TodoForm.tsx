import { Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { RootState } from '../store/store';
import { add } from '../store/slices/todoSlice';
import { TodoFormData } from '../store/types';

export const TodoForm = () => {
  const { list } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const { todoId } = useParams();

  const addTodo = (data: TodoFormData) => {
    dispatch(add(data));
    navigate('/');
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    addTodo({
      title,
      text,
    });
    event.preventDefault();
  };

  return (
    <div className="todo">
      {/* Header */}
      <div className="todo-header">
        <Typography variant="h4" component="h1" className="todo-title">
          Create todo
        </Typography>
      </div>

      {/* List */}
      <div className="todo-body">
        <Container>
          <form className="todo-form" onSubmit={handleSubmit}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
            <TextField
              id="outlined-basic"
              label="Text"
              variant="outlined"
              value={text}
              onChange={(event) => {
                setText(event.target.value);
              }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Container>
      </div>

      {/* Footer */}
      <div className="todo-footer">
        <Link to="/">
          <Button color="warning" variant="contained">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};
