import { Button, Container, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export const TodoForm = () => {
  const dispatch = useDispatch();

  const [text, setText] = useState('My todo #');
  const { todoId } = useParams();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    alert('A name was submitted: ');
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
              label="Text"
              variant="outlined"
              value={text}
              onChange={handleChange}
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
