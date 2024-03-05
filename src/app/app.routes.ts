import { Routes } from '@angular/router';
import { ScheduleListComponent } from './features/schedules/components/schedule-list/schedule.component';
import { CreateScheduleComponent } from './features/schedules/components/create-schedule/create-schedule.component';

export const routes: Routes = [
    { path: 'home', component: ScheduleListComponent }, 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'create-schedule', component: CreateScheduleComponent}
];
