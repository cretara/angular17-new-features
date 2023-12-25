import {FormControl} from "@angular/forms";

export interface AccountType {
  id: number;
  type: string;
}

export interface FormModel {
  username: FormControl<string | null>;
  accountType: FormControl<AccountType | null>;
  message: FormControl<string | null>;
}

export const ACCOUNT_TYPES: AccountType[] = [
  {id: 1, type: 'Publisher'},
  {id: 2, type: 'Editor'},
  {id: 3, type: 'Admin'}
];

