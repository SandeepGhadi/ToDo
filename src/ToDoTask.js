//import React from "react";
//import React, { useState } from "react";
const ToDoTask = (props) => {

    return (
        <>
            <div className="todo">
                <li>
                    <input value={props.text} />
                </li>
                <button className="Edit-btn"
                    onClick={() => {
                        props.textEdit(props.id);
                    }}>Edit</button>
                <button className="trash-btn"
                    onClick={() => {
                        props.onSelect(props.id);
                    }}>X</button>

            </div>
        </>
    );
};

export default ToDoTask;