import "./TodoStyle.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";

const Todo = () => {
  return (
    <div id="body-wrapper">
      <div className="todo-box">
        <div className="todo-header">
          <div className="todo-header-wrap">
            <div className="todo-heading">
              <h3>Todo</h3>
            </div>
            <div className="path">
              <p>Home / Apps / Todo</p>
            </div>
          </div>
        </div>
        <div className="todo-body">
          <div className="card">
            <div className="card-header">
              <div className="card-name">
                <p>To-Do</p>
              </div>
              <div className="finished-checkbox">
                <p>Mark all as finished</p>
                <input type="checkbox" checked="checked" />
              </div>
            </div>
            <div className="todo-tasks">
              <div className="task-one">
                <div className="task-name">
                  <h4>Some task...</h4>
                </div>
                <div className="task-icons">
                  <div className="delete">
                    <RiDeleteBin6Line className="delete-approve" />
                  </div>
                  <div className="approve">
                    <AiOutlineCheck className="delete-approve" />
                  </div>
                </div>
              </div>
              <div className="task-one">
                <div className="task-name-two">
                  <h4>Some task...</h4>
                </div>
                <div className="task-icons">
                  <div className="delete">
                    <RiDeleteBin6Line className="delete-approve" />
                  </div>
                  <div className="approve">
                    <AiOutlineCheck className="delete-approve" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
