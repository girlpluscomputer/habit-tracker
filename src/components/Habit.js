import React from 'react';
import './Habit.css';

function Habit({ habit, handleDelete, index }) {
	return (
		<div className="Habit-container">
			<h2 className="Habit-title">{habit}</h2>
			<button
				onClick={() => handleDelete(index)}
				className="Habit-delete-button"
			>
				x
			</button>
		</div>
	);
}

export default Habit;
