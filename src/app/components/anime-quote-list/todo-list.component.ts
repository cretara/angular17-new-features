import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";
import {Todo, TodoResponseApi} from "../../models/todo";
import { map } from 'rxjs';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-anime-quote-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss'
})
export class TodoListComponent implements OnInit {

  #httpClient = inject(HttpClient);

  #destroyRef = inject(DestroyRef);

  /**
   * List of todos
   */
  todoList: Todo[] = [];

  /**
   * @param {FormBuilder} #formBuilder
   * @type {FormBuilder}
   */
  #formBuilder: FormBuilder = inject(FormBuilder);

  todoFormGroup = this.#formBuilder.group(
    {
      todoName: [''],
      isComplete: ['']
    });


  ngOnInit() {
    this.#httpClient.get<TodoResponseApi>('https://calm-plum-jaguar-tutu.cyclic.app/todos')
      .pipe(takeUntilDestroyed(this.#destroyRef),
        map((todoList) => todoList.data))
      .subscribe((todoListObservableValue) => {
        console.log("todoListObservableValue",  todoListObservableValue);
        this.todoList = todoListObservableValue;
      });

  }

}
