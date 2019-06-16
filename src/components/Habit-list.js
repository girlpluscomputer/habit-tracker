import React, { Fragment } from 'react';
import Habit from './Habit';

const HabitList = ({ habits, handleDelete }) => (
	<Fragment>
		{habits.map((habit, index) => (
			<Habit
				habit={habit}
				key={index}
				index={index}
				handleDelete={handleDelete}
			/>
		))}
	</Fragment>
);

export default HabitList;
