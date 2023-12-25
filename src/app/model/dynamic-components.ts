import {DynamicComponent} from "../components/dynamic/dynamic.component";
import {Type} from "@angular/core";
export const dynamicComponents:{[index:string] : Type<any>} = {
  'dynamicComponent': DynamicComponent
};
