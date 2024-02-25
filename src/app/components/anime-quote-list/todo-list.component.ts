import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Todo, TodoResponseApi} from "../../models/todo";
import {map} from 'rxjs';
import {DatePipe, JsonPipe, NgIf} from "@angular/common";
import {NzButtonComponent} from "ng-zorro-antd/button";
import {NzCheckboxComponent} from "ng-zorro-antd/checkbox";

@Component({
  selector: 'app-anime-quote-list',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    DatePipe,
    NzButtonComponent,
    NzCheckboxComponent,
    FormsModule,
    JsonPipe,
    NgIf
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

  editMode = false;

  todoFormGroupArray: FormGroup[] = [];


  ngOnInit() {
    this.#httpClient.get<TodoResponseApi>('https://calm-plum-jaguar-tutu.cyclic.app/todos')
      .pipe(takeUntilDestroyed(this.#destroyRef),
        map((todoList) => todoList.data))
      .subscribe((todoListObservableValue) => {
        this.todoList = todoListObservableValue.map((todo) => {
            return {
              ...todo,
              isComplete: !todo.isComplete
            };
          }
        );
        this.buildTodoFormGroup();
      });
  }

  private buildTodoFormGroup() {
    this.todoList.forEach((todo) => {
      this.todoFormGroupArray.push(this.#formBuilder.group({
        id: [todo._id],
        todoName: [todo.todoName, Validators.required],
        isComplete: [todo.isComplete, Validators.required],
        createdAt: [todo.createdAt],
        updatedAt: [todo.updatedAt]
      }))
    });
  }

  toggleEditMode() {
    this.editMode = !this.editMode;
  }

  protected readonly FormArray = FormArray;
  protected readonly FormGroup = FormGroup;
}
