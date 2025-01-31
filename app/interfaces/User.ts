import { Training } from "./Training"

export interface User{
    id: number,
    created_at: Date,
    username: string,
    age: string,
    actualWeigth: number,
    initData: Date
    trainings: Training[]
}