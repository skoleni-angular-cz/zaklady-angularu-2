import { Component, OnInit } from '@angular/core';
import { ApiTodoService } from './api-todo.service';
import { TodoItem } from './todo.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  todoItems: TodoItem[] = [];

  currentTodoName: string = '';

  constructor(private apiTodoService: ApiTodoService) {}

  async ngOnInit() {
    await this.loadTodos();
  }

  onTodoNameChange(todoName: string) {
    this.currentTodoName = todoName;
  }

  async onAddTodoButtonClick() {
    if (this.currentTodoName !== '') {
      await this.apiTodoService.createTodo(this.currentTodoName, false);
      await this.loadTodos();
    }
  }

  onTodoCompleted(todoItem: TodoItem) {
    const foundTodo = this.todoItems.find((ti) => ti.id === todoItem.id);

    foundTodo.completed = true;
  }

  onTodoRemove(todoItem: TodoItem) {
    this.todoItems = this.todoItems.filter((ti) => ti.id !== todoItem.id);
  }

  private async loadTodos() {
    this.todoItems = await this.apiTodoService.getAllTodos();
  }
}
