import { TrainingDay } from "@/types/workout.type";

export const mockData: TrainingDay[] = [
  {
    id: 1,
    date: new Date("2023-06-05"),
    workouts: [],
  },
  {
    id: 2,
    date: new Date("2023-06-06"),
    workouts: [
      {
        id: 1,
        name: "Chest Day - with Arm exercises",
        exercises: [
          {
            id: 1,
            name: "Bench Press Medium Grip",
            information: "50 lb x 5, 60 lb x 5, 70 lb x 5",
            numOfSets: 3,
          },
          {
            id: 2,
            name: "Exercise B",
            information: "40 lb x 10",
            numOfSets: 1,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    date: new Date("2023-06-07"),
    workouts: [
      {
        id: 2,
        name: "Leg DaY",
        exercises: [
          {
            id: 3,
            name: "Exercise C",
            information: "30 lb x 6",
            numOfSets: 1,
          },
          {
            id: 4,
            name: "Exercise D",
            information: "40 lb x 6",
            numOfSets: 1,
          },
          {
            id: 5,
            name: "Exercise E",
            information: "50 lb x 6",
            numOfSets: 1,
          },
        ],
      },
      {
        id: 3,
        name: "Arm day",
        exercises: [
          {
            id: 6,
            name: "Exercise F",
            information: "60 lb x 6",
            numOfSets: 1,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    date: new Date("2023-06-08"),
    workouts: [],
  },
  {
    id: 5,
    date: new Date("2023-06-09"),
    workouts: [],
  },
  {
    id: 6,
    date: new Date("2023-06-10"),
    workouts: [],
  },
  {
    id: 7,
    date: new Date("2023-06-11"),
    workouts: [],
  },
];
