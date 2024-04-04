import { Component } from '@angular/core';
import { MyContainerComponent, MyInputComponent, MySelectComponent } from '../../../../shared';
@Component({
  selector: 'app-create-schedule',
  standalone: true,
  imports: [MyInputComponent, MySelectComponent, MyContainerComponent],
  templateUrl: './create-schedule.component.html',
  styleUrl: './create-schedule.component.scss'
})
export class CreateScheduleComponent {

}
