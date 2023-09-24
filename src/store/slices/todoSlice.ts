import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoFormData, TodoState } from '../types';

const initialState: TodoState = {
  list: [
    {
      id: 1,
      title: 'Buy products',
      text: 'Groceries, bread, eggs',
      isCompleted: false,
    },
    {
      id: 2,
      title: 'Home work',
      text: 'Read page 234, math',
      isCompleted: false,
    },
    {
      id: 3,
      title: 'Meet with friend',
      text: 'Arman, 16:00 Mega Center',
      isCompleted: false,
    },
  ],
  length: 3,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<TodoFormData>) => {
      state.list.push({
        id: state.length + 1,
        title: action.payload.title,
        text: action.payload.text,
        isCompleted: false,
      });
    },
    update: (state) => {},
    remove: (state) => {},
    toggleCheck: (state, action: PayloadAction<{ id: number }>) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    },
  },
});

export const { add, update, remove, toggleCheck } = todoSlice.actions;

export default todoSlice.reducer;
