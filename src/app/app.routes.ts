import { Routes } from '@angular/router';
import {DynamicComponent} from "./components/dynamic/dynamic.component";
import {FormComponent} from "./components/form/form.component";

export const routes: Routes = [
  { path: 'dynamic', component: DynamicComponent },
  { path: 'form', component: FormComponent },
];
