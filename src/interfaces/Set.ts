import { Repetition } from "./Repetition";

export interface Set{
    id: number,
    created_at: Date,
    setNumber: number,
    notes: string,
    repetitions: Repetition[]
}