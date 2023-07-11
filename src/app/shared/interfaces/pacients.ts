import { Appointment } from "./appointments"
import { ClinicalCondition } from "./clinicalConditions"
import { User } from "./doctors"
import { Prescription } from "./prescriptions"

interface PacientGeneralInfo {
    [key: string]: string,
    name: string,
    sex: string,
    birthdate: string
}

interface PacientAddress {
    [key: string | number]: string | number,
    city: string,
    street: string,
    number: string | number,
    zipCode: string,
    additionalInfo: string
}

interface Pacient {
    [key: string | number]: string | number | PacientGeneralInfo | PacientAddress,
    id: string | number,
    generalInfo: PacientGeneralInfo
    address: PacientAddress
};


interface FlatPacient {
    [key: string | number]: string | number,
    id: string | number,
    name: string,
    sex: string,
    birthdate: string
}

interface PacientBroad {
    [key: string]: Pacient | User[] | Prescription[] | ClinicalCondition[],
    pacientInfo: Pacient,
    seenDoctors: User[],
    lastPrescriptions: Prescription[],
    lastClinicalConditions: ClinicalCondition[]
}

interface DetailedPacient {
    [key: string]: Pacient | Appointment[] | ClinicalCondition[] | User[] | Prescription[],
    pacient: Pacient,
    appointments: Appointment[],
    clinicalConditions: ClinicalCondition[],
    doctors: User[],
    prescriptions: Prescription[],
}


export { Pacient, FlatPacient, PacientBroad, DetailedPacient };