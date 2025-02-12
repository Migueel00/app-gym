import { User } from "./User";

export interface AppState{
    user: User | null;
    setUser: (user: User) => void;
}