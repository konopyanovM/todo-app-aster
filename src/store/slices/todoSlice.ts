import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoFormData, TodoItem, TodoState } from '../types';
import { RootState } from '../store';

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
        id: ++state.length,
        title: action.payload.title,
        text: action.payload.text,
        isCompleted: false,
      });
    },
    update: (state, action: PayloadAction<TodoItem>) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload.id) {
          return {
            id: action.payload.id,
            title: action.payload.title,
            text: action.payload.text,
            isCompleted: action.payload.isCompleted,
          };
        }
        return item;
      });
    },
    remove: (state, action: PayloadAction<{ id: number }>) => {
      state.list = state.list.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    toggleComplete: (state, action: PayloadAction<{ id: number }>) => {
      state.list = state.list.map((item) => {
        if (item.id === action.payload.id) {
          item.isCompleted = !item.isCompleted;
        }
        return item;
      });
    },
  },
});

// Selectors
export const selectTodoList = (state: RootState) => state.todo.list;
export const selectTodoItem = (id: string) => (state: RootState) => {
  if (id) return state.todo.list.find((item) => item.id === Number(id));
};

export const { add, update, remove, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
