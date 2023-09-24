export interface TodoState {
  list: TodoItem[];
}

export interface TodoItem {
  id: number;
  text: string;
  isCompleted: boolean;
}
