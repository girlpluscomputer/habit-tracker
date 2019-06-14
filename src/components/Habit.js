import React from "react";
import "./Habit.css";

function Habit(props) {
  return (
    <div className="Habit-container" key={props.id}>
      <div className="Habit-card">
        <h2 className="Habit-title">{props.habit}</h2>
        <button
          onClick={props.handleDelete}
          className="Habit-delete-button"
          id={props.id}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Habit;
