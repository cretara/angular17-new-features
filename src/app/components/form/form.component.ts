import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {ACCOUNT_TYPES, AccountType, FormModel} from "../../model/form-model";
import {DropdownModule} from "primeng/dropdown";
import {CommonModule} from "@angular/common";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class FormComponent {

  public form: FormGroup<FormModel>;

  public ACCOUNT_TYPES = ACCOUNT_TYPES;

  constructor() {
    this.form = new FormGroup<FormModel>({
      username: new FormControl(null),
      accountType: new FormControl<AccountType | null>(null),
      message: new FormControl(null)
    });
  }

  onFormSubmit() {
    console.log(this.form.getRawValue());
  }
}
