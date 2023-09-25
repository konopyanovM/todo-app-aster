import {
  Button,
  FormControlLabel,
  Paper,
  Switch,
  Typography,
} from '@mui/material';
import { ChangeEvent, useContext } from 'react';
import { ThemeModeContext } from '../components/hocs/AppThemeProvider';
import { Link } from 'react-router-dom';

export const TodoSettings = () => {
  const themeMode = useContext(ThemeModeContext);

  const toggleMode = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      themeMode.set('light');
    } else {
      themeMode.set('dark');
    }
  };

  return (
    <Paper className="todo">
      <div className="todo-header">
        <Typography variant="h4" component="h1" className="todo-title">
          Settings
        </Typography>
      </div>
      <div className="todo-body">
        <FormControlLabel
          control={
            <Switch
              checked={themeMode.mode === 'light' ? true : false}
              onChange={toggleMode}
            />
          }
          label="Switch theme"
          labelPlacement="start"
        />
      </div>
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
