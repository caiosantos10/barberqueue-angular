import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ScheduleService } from '../../services/schedule.service';
import { ScheduleListComponent } from './schedule.component';

@NgModule({
  declarations: [ScheduleListComponent],
  imports: [
    CommonModule, HttpClientModule
  ],
  providers: [ScheduleService],
  exports: [ScheduleListComponent]
})
export class ScheduleModule { }
