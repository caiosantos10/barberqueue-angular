import { Component } from '@angular/core';
import { MyInputComponent } from '../../../../shared/components/my-input/my-input.component';
import { MyContainerComponent } from '../../../../shared/components/my-container/my-container.component';

@Component({
  selector: 'app-create-schedule',
  standalone: true,
  imports: [MyInputComponent, MyContainerComponent],
  templateUrl: './create-schedule.component.html',
  styleUrl: './create-schedule.component.scss'
})
export class CreateScheduleComponent {

}
