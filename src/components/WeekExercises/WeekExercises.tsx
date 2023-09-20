import { mockData } from "@/data/workout.data";
import { useState } from "react";

import "./WeekExercises.style.css";
import { DayExercise } from "../DayExercise/DayExercise";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  useDndContext,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import { TrainingDay } from "@/types/workout.type";
import { isExercise, isTrainingDay, isWorkout } from "@/services/app.service";
import { Workout } from "../Workout/Workout";
import { Exercise } from "../Exercise/Exercise";

type WeekExercisesContainerProps = {
  data: TrainingDay[];
};

const WeekExercisesContainer = ({ data }: WeekExercisesContainerProps) => {
  const dndContext = useDndContext();

  const activeData = dndContext.active?.data.current;

  return (
    <>
      <div className="workouts">
        {data.map(({ id, date, workouts }) => (
          <DayExercise key={id} id={id} date={date} workouts={workouts} />
        ))}
      </div>

      <DragOverlay>
        {isWorkout(activeData) && <Workout workout={activeData} />}
        {isExercise(activeData) && <Exercise exercise={activeData} />}
      </DragOverlay>
    </>
  );
};

export const WeekExercises = () => {
  const [exercisesOfWeek, setExercisesOfWeek] = useState(mockData);
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    const currentActive = active.data.current;
    const currentOver = over?.data.current;

    if (isTrainingDay(currentOver) && isWorkout(currentActive)) {
      const newExercisesOfWeek = exercisesOfWeek.reduce<TrainingDay[]>(
        (acc, cur) => {
          if (cur.id === currentOver.id) {
            acc.push({ ...cur, workouts: [...cur.workouts, currentActive] });
            return acc;
          }

          acc.push({
            ...cur,
            workouts: cur.workouts.filter((w) => w.id !== currentActive.id),
          });

          return acc;
        },
        []
      );

      setExercisesOfWeek(newExercisesOfWeek);
    }

    if (isWorkout(currentOver) && isExercise(currentActive)) {
      const newExercisesOfWeek = exercisesOfWeek.reduce<TrainingDay[]>(
        (acc, cur) => {
          const newWorkouts = cur.workouts.map((workout) => {
            if (workout.id === currentOver.id) {
              return {
                ...workout,
                exercises: [...workout.exercises, currentActive],
              };
            }

            return {
              ...workout,
              exercises: workout.exercises.filter(
                (e) => e.id !== currentActive.id
              ),
            };
          });

          acc.push({ ...cur, workouts: newWorkouts });
          return acc;
        },
        []
      );

      setExercisesOfWeek(newExercisesOfWeek);
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd} modifiers={[restrictToWindowEdges]}>
      <WeekExercisesContainer data={exercisesOfWeek} />
    </DndContext>
  );
};
