import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ScheduleService } from './feature/schedule/services/schedule.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  providers:[ScheduleService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'barberqueue-angular';
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
