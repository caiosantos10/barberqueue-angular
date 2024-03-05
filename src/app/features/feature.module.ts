import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleModule } from './schedules/components/schedule-list/schedule.module';
import { ScheduleListComponent } from './schedules/components/schedule-list/schedule.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, ScheduleModule
  ],
  exports: [ScheduleListComponent]
})
export class FeatureModule { }
