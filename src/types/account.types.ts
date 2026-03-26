export interface Account {
    id: string,
    name: string,
    phoneNumber: string,
    role: Role,
    isSaved: boolean,
}
type Role = 'admin' | 'default'