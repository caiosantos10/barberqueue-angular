import { Service } from "./service.interface"

export interface Barber {
    id: string,
    name: string,
    cnpj: string,
    email: string,
    password: string,
    avaliability: Avaliability
}

interface Avaliability {
    bookedTimes: string[],
    servicesOffered: Service[]
}