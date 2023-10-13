// Update the TodoItem component to include editing functionality.
import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { BiCheckCircle } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";

export default function TodoItem(props) {
  const {
    todo,
    removeTodo,
    completeTodo,
    editTodo,
    startEditingTodo,
    cancelEditingTodo,
    editingTodo,
  } = props;

  return (
    <div
      className={todo.completed ? "todo-row complete" : "todo-row"}
      style={todo.important ? { background: "orange" } : {}}
    >
      {editingTodo === todo.id ? (
        <div>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => editTodo(todo.id, e.target.value)}
          />
          <button onClick={() => cancelEditingTodo()}>Cancel</button>
        </div>
      ) : (
        <div>
          {todo.text}
          <div className="iconsContainer">
            <button onClick={() => startEditingTodo(todo.id)}>
              <BiEditAlt className="icon-large" />{" "}
              {/* Add the BiEditAlt icon here */}
            </button>
            <button onClick={() => removeTodo(todo.id)}>
              <RiCloseCircleLine className="icon-large" />
            </button>
            {/* <button onClick={() => completeTodo(todo.id)}>
              <BiCheckCircle className="icon-large"/>
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
}
