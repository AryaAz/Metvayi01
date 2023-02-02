export interface AthleteModel {
    id: number;
    name: string;
    avatar : string;
    age : number,
    weekPlan: Record<EDays, DayPlan>
}

export interface DayPlan {
    date: string;
    exercises: Exercise
}

export interface Exercise {
    run: string;
    strength: string;
    yoga: string;
}

export enum EDays {
    SUNDAY = "sunday",
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday",
}

