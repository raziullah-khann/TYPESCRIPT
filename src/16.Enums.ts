console.log("Enums in typescript");
// In TypeScript, an enum is a distinct data type that represents a set of named constants.

// scenario
// user1 = login => normal User
// user2 = login => admin login

enum Roles {
    user = 'user',
    admin = 'admin',
}
type LoginDetails = {
    name?: string;
    email: string;
    password: string;
    role: Roles;
}
const user1: LoginDetails = {
    name: 'Raziullah',
    email: 'raziullahkhan25@gmail.com',
    password: '@1234Khan',
    role:Roles.admin,
}
const user2: LoginDetails = {
    email: 'raziullahkhan25@gmail.com',
    password: '@1234Khan',
    role:Roles.user,
}
const isAdmin = (usr1: LoginDetails): string => {
    const { email, role } = usr1;
    return role === 'admin' ? `${email} is allow to edit the website` : `${email} is not allow to edit the website`
}
console.log(isAdmin(user1));
console.log(isAdmin(user2));
