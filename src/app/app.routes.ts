import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {TodoListComponent} from "./components/anime-quote-list/todo-list.component";

export const routes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: 'todo',
    component: TodoListComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
