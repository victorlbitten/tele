interface User {
    [key: string | number]: string | number | undefined,
    id?: string | number | undefined,
    userRoleId?: string | number,
    username: string,
    email?: string,
    firstName: string,
    lastName: string,
    specialization?: string,
    crm?: string
};

export { User };