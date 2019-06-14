import ReactDOM from "react-dom";
import React from "react";
import "./Modal.css";

function Modal(props) {
  if (!props.isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="Modal">
      <div className="Modal-card">
        {props.children}

        <form className="Modal-form" onSubmit={props.createHabit}>
          <h1 className="Modal-title">Create a new habit</h1>
          <input
            className="Modal-input"
            type="text"
            placeholder="Drink more water"
            onChange={props.handleChange}
          />
          <div className="Modal-buttons">
            <button onClick={props.close} className="Modal-close-button">
              CLOSE
            </button>
            <button
              className="Add-button"
              type="submit"
              onClick={props.createHabit}
            >
              CREATE
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
