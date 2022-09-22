import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyButtonComponent } from './my-button/my-button.component';
import { MyTextFieldComponent } from './my-text-field/my-text-field.component';
import { TodoItemComponent } from './todo-item/todo-item.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    MyButtonComponent,
    MyTextFieldComponent,
    TodoItemComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
