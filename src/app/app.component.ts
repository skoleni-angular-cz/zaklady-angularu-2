import { Component } from '@angular/core';
import { TodoItem } from './todo.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todoItems: TodoItem[] = [
    {
      id: 1,
      title: 'Buy milk',
      completed: false,
    }
  ];

  currentTodoName: string = '';

  onTodoNameChange(todoName: string) {
    this.currentTodoName = todoName;
  }

  onAddTodoButtonClick() {
    if (this.currentTodoName !== '') {
      this.todoItems.push({
        id: Number(new Date()),
        title: this.currentTodoName,
        completed: false,
      });
    }
  }

  onTodoCompleted(todoItem: TodoItem) {
    const foundTodo = this.todoItems.find((ti) => ti.id === todoItem.id);

    foundTodo.completed = true;
  }

  onTodoRemove(todoItem: TodoItem) {
    this.todoItems = this.todoItems.filter((ti) => ti.id !== todoItem.id);
  }
}
