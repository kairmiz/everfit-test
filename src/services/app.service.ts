import { Exercise, TrainingDay, Workout } from "@/types/workout.type";

export function isWorkout(data: unknown): data is Workout {
  return typeof data === "object" && data !== null && "exercises" in data;
}

export function isExercise(data: unknown): data is Exercise {
  return typeof data === "object" && data !== null && "information" in data;
}

export function isTrainingDay(data: unknown): data is TrainingDay {
  return typeof data === "object" && data !== null && "date" in data;
}
