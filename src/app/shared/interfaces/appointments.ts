import { ClinicalCondition } from "./clinicalConditions";
import { User } from "./doctors";
import { FlatPacient, Pacient } from "./pacients";
import { Prescription } from "./prescriptions";

interface Appointment {
    [key: string | number]: string | number | boolean | Array<ClinicalCondition> | User | Pacient |Array<Prescription>,
    id: string | number,
    appointmentId: string | number,
    startDate: string,
    endDate: string,
    clinicalConditions: Array<ClinicalCondition>,
    doctor: User,
    pacient: Pacient,
    prescriptions: Array<Prescription>,
    done: string | number | boolean
};

export { Appointment};