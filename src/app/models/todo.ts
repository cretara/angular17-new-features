export interface Todo {
  _id: string;
  todoName: string;
  isComplete: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TodoResponseApi {
  code: number;
  data: Todo[];
}
