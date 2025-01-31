import { Exercise } from "./Exercise";

export interface Training{
    id: number,
    created_at: Date,
    notes: string,
    exercises: Exercise[]
}