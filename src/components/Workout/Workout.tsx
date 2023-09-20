import { CirclePlusIcon, ThreeDotIcon } from "@/icons";
import { Workout as WorkoutItem } from "@/types/workout.type";
import { Exercise } from "../Exercise/Exercise";
import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSSProperties } from "react";

import "./Workout.style.css";

type WorkoutProps = {
  workout: WorkoutItem;
};

export const Workout = ({ workout }: WorkoutProps) => {
  const { id, name, exercises } = workout;

  const {
    attributes,
    listeners,
    setNodeRef: dragRef,
    isDragging,
  } = useDraggable({
    id: `workout-${id}-${name}`,
    data: workout,
  });

  const { setNodeRef: dropRef } = useDroppable({
    id: `workout-${id}-${name}`,
    data: workout,
  });

  const styles: CSSProperties = {
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      className="workout"
      ref={dragRef}
      style={styles}
      {...listeners}
      {...attributes}
    >
      <div ref={dropRef}>
        <div className="workout__name">
          <div>{name}</div>
          <ThreeDotIcon className="workout__name__icon" />
        </div>

        <div className="workout__exercise">
          {exercises.map((exercise) => (
            <Exercise key={exercise.name} exercise={exercise} />
          ))}
        </div>

        <div className="workout__footer">
          <CirclePlusIcon className="workout__footer__icon" />
        </div>
      </div>
    </div>
  );
};
