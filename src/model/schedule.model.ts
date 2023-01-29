export interface ScheduleModel {
    id: number;
    name: string;
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

