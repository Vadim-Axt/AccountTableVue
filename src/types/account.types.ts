export interface Account {
    id: string,
    name: string,
    phoneNumber: `^(\+7|8)[\s\-]?\(?\d{3}\)?[\s\-]?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}$`,
    role: 'admin' | 'default',
}