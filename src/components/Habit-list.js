import React, { Fragment } from "react";
import Habit from "./Habit";
function HabitList(props) {
  return (
    <Fragment>
      {props.habits.map((habit, id) => {
        return (
          <Habit
            habit={habit}
            key={id}
            id={id}
            handleDelete={props.handleDelete}
          />
        );
      })}
    </Fragment>
  );
}

export default HabitList;
