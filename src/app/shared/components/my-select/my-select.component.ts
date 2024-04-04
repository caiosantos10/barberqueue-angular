import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'my-select',
  standalone: true,
  imports: [CommonModule, NgSelectModule, FormsModule],
  templateUrl: './my-select.component.html'
})
export class MySelectComponent {
  @Input() formControl!: FormControl;
  @Input() label!: string;
  @Input() options!: string[];
  @Input() placeholder!: string;
  @Input() error: string = '';
  @Output() selectedItemEvent = new EventEmitter<any>();

  onChange(item: any) {
    this.selectedItemEvent.emit(item);
  }
}
