import {Component, inject, ViewChild, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {dynamicComponents} from "./model/dynamic-components";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('dynamicComponent', {read: ViewContainerRef}) dynamicComponentLayerContainerRef: ViewContainerRef | undefined;

  /**
   * ViewContainerRef to load the component dynamically
   */
  #viewContainerRef = inject(ViewContainerRef);

  /**
   * Load the component dynamically at button click
   */
  onAddDynamicComponent() {
    const dynamicComponent = dynamicComponents['dynamicComponent'];
    this.#viewContainerRef.createComponent(dynamicComponent);
  }
}
