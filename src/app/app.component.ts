import {Component, inject, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {DynamicModelJSON} from "./model/dynamic-model-json";
import {dynamicComponents} from "./model/dynamic-components";

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
   * Dynamically load the component from JSON file
   */
  private loadDynamicComponent() {
    //loads the component from JSON file
    this.#httpClient.get<DynamicModelJSON>('assets/dynamic-component.json').subscribe((dynamicComponentJSON: DynamicModelJSON) => {
      dynamicComponentJSON.components.forEach((singleDynamicComponent: string) => {
        const dynamicComponent = dynamicComponents[singleDynamicComponent];
        if (!dynamicComponent) {
          console.error(`Dynamic component ${singleDynamicComponent} not found`);
          return;
        }
        const componentRef = this.#viewContainerRef.createComponent(dynamicComponent);
        console.log("componentRef", componentRef);
      });
    });
  }
}
