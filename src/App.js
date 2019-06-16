import React, { Fragment } from 'react';
import AddHabit from './components/AddHabit';
import Modal from './components/Modal';
import HabitList from './components/Habit-list';
import './App.css';

class App extends React.Component {
	state = {
		show: false,
		habit: '',
		habits: [],
		days: []
	};

	componentDidUpdate = () => {
		console.log(this.state.habits);
	};

	createHabit = e => {
		const { habits, habit } = this.state;
		e.preventDefault();
		this.toggleModal();

		this.setState({
			habits: [...habits, habit]
		});
	};

	toggleModal = () => {
		const { show } = this.state;
		this.setState({ show: !show });
	};

	// handleClose = () => {
	// 	this.setState({
	// 		show: false
	// 	});
	// };

	// handleOpen = () => {
	// 	this.setState({
	// 		show: true
	// 	});
	// };

	handleChange = e => {
		const { target: { value: habit } } = e;

		this.setState({
			habit
		});
	};

	handleDelete = index => {
		const { habits: habitsState } = this.state;
		const habits = [...habitsState];
		habits.splice(index, 1);

		this.setState({
			habits
		});
	};

	render() {
		const { show, habits } = this.state;
		return (
			<Fragment>
				<div className="App">
					<div className="Sidebar">
						<AddHabit toggleModal={this.toggleModal} />
					</div>
					<div className="Dashboard">
						<HabitList habits={habits} handleDelete={this.handleDelete} />
					</div>
				</div>

				<Modal
					show={show}
					// close={this.handleClose}
					toggleModal={this.toggleModal}
					handleChange={this.handleChange}
					createHabit={this.createHabit}
				/>
			</Fragment>
		);
	}
}

export default App;
