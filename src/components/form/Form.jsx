import "./FormStyle.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

import React from "react";

const Form = ({ todos, deleteTodo }) => {
  const [styleBool, setStyleBool] = useState(false);
  return (
    <>
      {todos.map((todo, index) => (
        <div key={index.toString()} id="some-todo">
          <div className="task-name">
            <h4 style={
              styleBool === true ? {textDecoration: "line-through", color: "#26695c"} : {}
            }>{todo}</h4>
          </div>
          <div className="task-icons">
            <div className="delete">
              <RiDeleteBin6Line
                className="delete-approve"
                onClick={() => {
                  deleteTodo(index);
                }}
              />
            </div>
            <div className="approve">
              <AiOutlineCheck className="delete-approve"
                onClick={() => {
                  setStyleBool(true);
                }} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Form;
