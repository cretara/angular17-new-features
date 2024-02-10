import {Routes} from '@angular/router';
import {ReactivityComponent} from "./components/reactivity/reactivity.component";

export const routes: Routes = [
  {path: 'reactivity', component: ReactivityComponent},
  {path: '', redirectTo: 'AppComponent', pathMatch: 'full'},
];
