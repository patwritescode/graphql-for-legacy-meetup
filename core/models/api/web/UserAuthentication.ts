import User from "./User";

interface UserAuthentication {
    token: string;
    expires: string;
    user: User;
}

export default UserAuthentication;