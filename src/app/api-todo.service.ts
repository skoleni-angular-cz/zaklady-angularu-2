import { Injectable } from '@angular/core';
import { deleteData, postData, putData } from './http-helpers';
import { TodoItem } from './todo.model';

@Injectable({ providedIn: 'root' })
export class ApiTodoService {
  async getAllTodos(): Promise<TodoItem[]> {
    return (await fetch('https://jsonplaceholder.typicode.com/todos')).json();
  }

  async createTodo(title: string, completed: boolean): Promise<TodoItem> {
    return (
      await postData('https://jsonplaceholder.typicode.com/todos', {
        title: title,
        completed: completed,
      })
    ).json();
  }

  async updateTodo(todo: TodoItem): Promise<TodoItem> {
    return (
      await putData(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
        title: todo.title,
        completed: todo.completed,
      })
    ).json();
  }

  async deleteTodo(todo: TodoItem): Promise<void> {
    return (
      await deleteData(`https://jsonplaceholder.typicode.com/todos/${todo.id}`)
    ).json();
  }
}
