export interface TodoState {
  list: TodoItem[];
  length: number;
}

export interface TodoItem {
  id: number;
  title: string;
  text: string;
  isCompleted: boolean;
}

export interface TodoFormData {
  title: string;
  text: string;
}
