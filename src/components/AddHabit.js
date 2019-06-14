import React from "react";
import "./AddHabit.css";
function AddHabit(props) {
  return (
    <div className="AddHabit-container">
      <h2 className="sidebar-title">Habit Tracker</h2>
      <button className="AddHabit-button" onClick={props.handleClick}>
        Create a new habit
      </button>
    </div>
  );
}
export default AddHabit;
