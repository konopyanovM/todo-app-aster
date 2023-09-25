import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { add, selectTodoItem, update } from '../store/slices/todoSlice';
import { TodoFormData, TodoItem } from '../store/types';

export const TodoForm = (): ReactElement => {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const todoItem = useSelector(selectTodoItem(todoId ?? ''));
  const dispatch = useDispatch();

  const [title, setTitle] = useState<string>(todoItem?.title ?? '');
  const [text, setText] = useState<string>(todoItem?.text ?? '');
  const [isCompleted, setCompleted] = useState<boolean>(
    todoItem?.isCompleted ?? false
  );

  const addTodo = (data: TodoFormData): void => {
    dispatch(add(data));
    navigate('/');
  };

  const updateTodo = (data: TodoItem): void => {
    dispatch(update(data));
    navigate('/');
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>): void => {
    if (todoId) {
      updateTodo({
        id: Number(todoId),
        title,
        text,
        isCompleted,
      });
    } else {
      addTodo({
        title,
        text,
      });
    }
    event.preventDefault();
  };

  return (
    <Paper className="todo">
      {/* Header */}
      <div className="todo-header">
        <Typography variant="h4" component="h1" className="todo-title">
          {todoId ? 'Update' : 'Create'} todo
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
            {Boolean(todoId) ? (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={isCompleted}
                    onChange={(event) => {
                      setCompleted(Boolean(event.target.checked));
                    }}
                  />
                }
                label="Completed"
              />
            ) : null}
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
    </Paper>
  );
};
