import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'my-container',
  standalone: true,
  imports: [],
  styleUrl: './my-container.component.scss',
  template: `
    <div class="my-container">
      <ng-content></ng-content>
    </div>`
})
export class MyContainerComponent {

}
