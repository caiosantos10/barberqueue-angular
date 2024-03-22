import { Routes } from '@angular/router';
import { ScheduleListComponent } from './features/schedules/components/schedule-list/schedule.component';
import { CreateScheduleComponent } from './features/schedules/components/create-schedule/create-schedule.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: 'home', component: DashboardComponent }, 
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'agenda', component: ScheduleListComponent }, 
    { path: 'marcar-hora', component: CreateScheduleComponent},
    { path: '**', component: DashboardComponent}
];
