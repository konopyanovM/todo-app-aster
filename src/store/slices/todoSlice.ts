import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TodoState } from '../types';

const initialState: TodoState = {
  list: [
    {
      id: 1,
      text: 'My todo #1',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'My todo #2',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'My todo #3',
      isCompleted: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state) => {},
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
