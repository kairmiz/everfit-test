import { Exercise as ExerciseItem } from "@/types/workout.type";
import { useDraggable } from "@dnd-kit/core";

import "./Exerise.style.css";
import { CSSProperties } from "react";

type ExerciseProps = {
  exercise: ExerciseItem;
};

export const Exercise = ({ exercise }: ExerciseProps) => {
  const { id, information, name, numOfSets } = exercise;

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: `exercise-${id}-${name}`,
    data: { id, information, name, numOfSets },
  });

  const styles: CSSProperties = {
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      className="exercise"
      ref={setNodeRef}
      style={styles}
      {...listeners}
      {...attributes}
    >
      <div className="exercise__name">{name}</div>
      <div className="exercise__detail">
        <span className="exercise__detail__num">{numOfSets}x</span>
        <span className="exercise__detail__info">{information}</span>
      </div>
    </div>
  );
};
