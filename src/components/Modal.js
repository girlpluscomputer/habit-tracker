import ReactDOM from 'react-dom';
import React from 'react';
import './Modal.css';

function Modal({ show, children, createHabit, handleChange, toggleModal }) {
	if (!show) {
		return null;
	}

	return ReactDOM.createPortal(
		<div className="Modal">
			<div className="Modal-card">
				{children}

				<form className="Modal-form" onSubmit={createHabit}>
					<h1 className="Modal-title">Create a new habit</h1>
					<input
						className="Modal-input"
						type="text"
						placeholder="Drink more water"
						autoFocus
						onChange={handleChange}
					/>
					<div className="Modal-buttons">
						<button
							onClick={toggleModal}
							type="button"
							className="Modal-close-button"
						>
							CLOSE
						</button>
						<button className="Add-button">CREATE</button>
					</div>
				</form>
			</div>
		</div>,
		document.getElementById('modal')
	);
}

export default Modal;
