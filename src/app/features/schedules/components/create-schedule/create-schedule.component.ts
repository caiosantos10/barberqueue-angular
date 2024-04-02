import { Component } from '@angular/core';
import { MyInputComponent } from '../../../../shared/components/my-input/my-input.component';

@Component({
  selector: 'app-create-schedule',
  standalone: true,
  imports: [MyInputComponent],
  templateUrl: './create-schedule.component.html',
  styleUrl: './create-schedule.component.scss'
})
export class CreateScheduleComponent {

}
