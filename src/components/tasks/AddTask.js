import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

const AddTask = () => {
  let history = useHistory();
  const [task, setTask] = useState({
    title: "",
  });

  const { title } = task;
  const onInputChange = (e) => {
    setTask({ ...task, [e.target.title]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/tasks", task);
    history.push("/");
  };
  
  return (
    <div className="container title">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">New Task</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter New Task"
              title="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Save</button>
          <Link className="btn btn-dark btn-block" to="/">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
