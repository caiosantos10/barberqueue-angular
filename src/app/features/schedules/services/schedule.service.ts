import { Injectable } from "@angular/core";
import { environment } from "../../../../enviroments/enviroment";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({ 
    providedIn: 'root' 
})
export class ScheduleService {
    readonly BASE_URL = environment.apiUrl;

    constructor(private http: HttpClient) { }

    public getSchedules(): Observable<any> {
        return this.http.get(`${this.BASE_URL}/schedules`);
    }

}