import {Component, inject, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {DynamicModelJSON} from "./model/dynamic-model-json";
import {DynamicComponent} from "./components/dynamic/dynamic.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  /**
   * ViewContainerRef to load the component dynamically
   */
  #viewContainerRef = inject(ViewContainerRef);

  /**
   * HttpClient to load the JSON file
   */
  #httpClient = inject(HttpClient);

  constructor() {
    this.loadDynamicComponent();

  }

  /**
   * Create the component dynamically
   * @param componentClassName
   * @returns {any}
   */
  createComponentDynamicClass(componentClassName: string): any {
    const registryClasses = {
      DynamicComponent
    };
    for (let key in registryClasses) {
      if (key === componentClassName) {
        // @ts-ignore
        return new registryClasses[key]();
      }
    }
  }

  /**
   * Dynamically load the component from JSON file
   */
  private loadDynamicComponent() {
    //loads the component from JSON file
    this.#httpClient.get<DynamicModelJSON>('assets/dynamic-component.json').subscribe((dynamicComponentJSON: DynamicModelJSON) => {
      dynamicComponentJSON.components.forEach((singleDynamicComponent: string) => {
        const dynamicComponentClass = this.createComponentDynamicClass(singleDynamicComponent);
        console.log("dynamicComponentClass", dynamicComponentClass);
        const componentRef = this.#viewContainerRef.createComponent(dynamicComponentClass);
        console.log("componentRef", componentRef);
      });
    });
  }
}
