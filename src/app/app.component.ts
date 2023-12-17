import {Component, ViewContainerRef} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private viewContainerRef: ViewContainerRef) {
    this.loadDynamicComponent();
  }

  private loadDynamicComponent() {
    import('./components/dynamic/dynamic.component').then(({DynamicComponent}) => {
      this.viewContainerRef.createComponent(DynamicComponent);
    });
  }
}
