import { Set } from "./Set";

export interface Exercise{
    id: number,
    created_at: Date,
    name: string,
    muscularGroup: string,
    sets: Set[]
}