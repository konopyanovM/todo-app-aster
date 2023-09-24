import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TodoItem } from '../store/types';
import {
  remove,
  selectTodoList,
  toggleComplete,
} from '../store/slices/todoSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';

export const TodoList = () => {
  const list = useSelector(selectTodoList);
  const dispatch = useDispatch();

  const handleCheck = (id: number) => () => {
    dispatch(toggleComplete({ id }));
  };

  const handleRemove = (id: number) => () => {
    dispatch(remove({ id }));
  };

  return (
    <div className="todo">
      {/* Header */}
      <div className="todo-header">
        <Typography variant="h4" component="h1" className="todo-title">
          My Todo
        </Typography>
      </div>

      {/* List */}
      <div className="todo-body">
        <List className="todo-list">
          {list.map((item: TodoItem) => (
            <ListItem
              disablePadding
              className="todo-list__item"
              key={item.id}
              secondaryAction={
                <div className="todo-list__item-actions">
                  <Link to={'/todo-form/' + item.id}>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Link>

                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={handleRemove(item.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              }
            >
              <ListItemButton onClick={handleCheck(item.id)} dense>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={item.isCompleted}
                    tabIndex={-1}
                    disableRipple
                  />
                </ListItemIcon>
                <ListItemText primary={item.title} secondary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* Add new todo */}
          <Link to="/todo-form">
            <ListItem
              disablePadding
              className="todo-list__item todo-list__item-add"
            >
              <ListItemButton dense alignItems="center">
                <ListItemIcon>
                  <AddIcon fontSize="large"></AddIcon>
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </Link>
        </List>
      </div>

      {/* Footer */}
      <div className="todo-footer"></div>
    </div>
  );
};
