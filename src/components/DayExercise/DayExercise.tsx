import { getDayName } from "@/services/date.service";
import { Workout } from "../Workout/Workout";
import { Workout as WorkoutItem } from "@/types/workout.type";
import { useDroppable } from "@dnd-kit/core";

type DayExerciseProps = {
  id: string | number;
  date: Date;
  workouts: WorkoutItem[];
};

export const DayExercise = ({ id, date, workouts }: DayExerciseProps) => {
  const today = new Date("2023-06-09");

  const { setNodeRef } = useDroppable({
    id: getDayName(date),
    data: { id, date },
  });

  return (
    <div key={date.valueOf()} ref={setNodeRef} className="workouts__workout">
      <div className="workouts__workout__day-name">
        {getDayName(date).slice(0, 3)}
      </div>
      <div className="workouts__workout__content">
        <div
          className={`workouts__workout__content__date ${
            today.getDate() === date.getDate()
              ? "workouts__workout__content__date--today"
              : ""
          }`}
        >
          {date.getDate().toString().padStart(2, "0")}
        </div>

        <div className="workouts__workout__content__list">
          {workouts.map((workout) => (
            <Workout key={workout.name} workout={workout} />
          ))}
        </div>
      </div>
    </div>
  );
};
