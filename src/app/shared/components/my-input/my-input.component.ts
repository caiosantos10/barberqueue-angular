import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-input',
  standalone: true,
  imports: [],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.scss'
})
export class MyInputComponent {
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
}
