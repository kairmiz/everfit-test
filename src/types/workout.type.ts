export type Exercise = {
  id: number | string;
  name: string;
  information: string;
  numOfSets: number;
};

export type Workout = {
  id: number | string;
  name: string;
  exercises: Exercise[];
};

export type TrainingDay = {
  id: number | string;
  date: Date;
  workouts: Workout[];
};
