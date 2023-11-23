import {Component, effect, inject, signal} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {Title} from "@angular/platform-browser";
import {FormControl, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, FormsModule, NzCheckboxModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular17-new-features';

  titleService = inject(Title);

  public isChecked = signal(false);

  public checkBoxFormControl: FormControl = new FormControl<boolean>(false)

  constructor() {
    this.titleService.setTitle(this.title);
    effect(() => {
      this.checkBoxFormControl.patchValue(this.isChecked());
      console.debug("checkBoxFormControl", this.checkBoxFormControl.value)
    })
  }

}
