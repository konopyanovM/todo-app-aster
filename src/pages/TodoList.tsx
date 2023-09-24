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
import { RootState } from '../store/store';
import { TodoItem } from '../store/types';
import { toggleCheck } from '../store/slices/todoSlice';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

export const TodoList = () => {
  const { list } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const handleCheck = (value: number) => () => {
    dispatch(toggleCheck({ id: value }));
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
              key={item.id}
              secondaryAction={
                <div className="todo-list__item-actions">
                  <Link to={'/todo-form/' + item.id}>
                    <IconButton edge="end" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Link>

                  <IconButton edge="end" aria-label="delete">
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
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>

      {/* Footer */}
      <div className="todo-footer"></div>
    </div>
  );
};
