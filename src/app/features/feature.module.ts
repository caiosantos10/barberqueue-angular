import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleListComponent } from './schedules/components/schedule-list/schedule.component';
import { ScheduleService } from './schedules/services/schedule.service';
import { CreateScheduleComponent } from './schedules/components/create-schedule/create-schedule.component';



@NgModule({
  declarations: [ScheduleListComponent, CreateScheduleComponent],
  imports: [
    CommonModule
  ],
  providers: [ScheduleService],
  exports: [ScheduleListComponent]
})
export class FeatureModule { }
