import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-input',
  standalone: true,
  imports: [],
  templateUrl: './my-input.component.html',
  styleUrl: './my-input.component.scss'
})
export class MyInputComponent {
  @Input() formControl!: FormControl;
  @Input() label!: string;
  @Input() type!: string;
  @Input() placeholder!: string;
  @Input() error !: string;
}
