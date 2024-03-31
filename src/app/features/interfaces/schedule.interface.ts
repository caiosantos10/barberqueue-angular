import { Barber } from "./barber.interface";
import { Customer } from "./customer.interface";
import { Service } from "./service.interface";

export interface Schedule {
    id: number,
    initialTime: string,
    endTime: string,
    isActive: boolean,
    customer: Customer,
    barber: Barber,
    services: Array<Service>
}