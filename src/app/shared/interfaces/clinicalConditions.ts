interface ClinicalCondition {
    [key: string | number]: string | number,
    id: string | number,
    userId: string | number,
    appointmentId: string | number,
    clinicalConditionStatusId: string | number,
    name: string,
    description: string
};

export { ClinicalCondition };