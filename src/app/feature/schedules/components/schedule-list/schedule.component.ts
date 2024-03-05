import { Component } from '@angular/core';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule-list',
  standalone: false,
  templateUrl: './schedule-list.component.html',
  styleUrl: './schedule-list.component.scss'
})
export class ScheduleListComponent {

  schedules: Array<any> = [];

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.getSchedules()
  }

  private getSchedules() {
    this.scheduleService.getSchedules().subscribe(res => {
      this.schedules = res;
    });
  }

}
