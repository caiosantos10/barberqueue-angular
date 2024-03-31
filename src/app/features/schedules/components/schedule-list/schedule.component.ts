import { Component } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Schedule } from '../../../interfaces/schedule.interface';
import { Response } from '../../../interfaces/response.interface';

@Component({
  selector: 'app-schedule-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.scss'
})
export class ScheduleListComponent {
  schedules$!: Observable<Response<Schedule>>;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this._initSchedules()
  }

  private _initSchedules() {
    this.schedules$ = this.scheduleService.getSchedules();
  }

}
