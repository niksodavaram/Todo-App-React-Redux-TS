export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoAction;

export function addTodo(text: string): AddTodoAction {
  return { type: ADD_TODO, payload: text };
}

export function toggleTodo(id: number): ToggleTodoAction {
  return { type: TOGGLE_TODO, payload: id };
}