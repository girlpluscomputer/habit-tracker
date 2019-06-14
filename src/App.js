import React from "react";
import AddHabit from "./components/AddHabit";
import Modal from "./components/Modal";
import HabitList from "./components/Habit-list";

class App extends React.Component {
  state = {
    show: false,
    habit: "",
    habits: [],
    days: []
  };
  createHabit = e => {
    e.preventDefault();
    this.handleClose();
    this.state.habits.push(this.state.habit);
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };
  handleOpen = () => {
    this.setState({
      show: true
    });
  };

  handleChange = e => {
    this.setState({
      habit: e.target.value
    });
  };

  handleDelete = e => {
    const newHabits = this.state.habits;
    const index = e.target.getAttribute("id");
    newHabits.splice(index, 1);
    this.setState({
      habits: newHabits
    });
  };

  render() {
    return (
      <div className="App">
        <div className="content">
          <div className="sidebar">
            <AddHabit handleClick={this.handleOpen} />
          </div>
          <div className="Dashboard">
            <HabitList
              habits={this.state.habits}
              handleDelete={this.handleDelete}
            />
          </div>
        </div>

        <Modal
          isOpen={this.state.show}
          close={this.handleClose}
          handleChange={this.handleChange}
          createHabit={this.createHabit}
        />
      </div>
    );
  }
}

export default App;
