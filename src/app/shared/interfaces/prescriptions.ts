interface Prescription {
    [key: string | number]: string | number,
    id: string | number,
    userId: string | number,
    pacientId: string | number,
    appointmentId: string | number,
    medicationName: string,
    dosage: string,
    timesADay: string,
    useInstructions: string
};

export { Prescription };

