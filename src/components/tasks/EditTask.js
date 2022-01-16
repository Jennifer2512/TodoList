import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams, Link } from "react-router-dom";

const EditTask = () => {
  let history = useHistory();
  const { id } = useParams();
  const [task, setTask] = useState({
    title: "",
  });

  const { title} = task;
  const onInputChange = (e) => {
    setTask({ ...task, [e.target.title]: e.target.value });
  };

  useEffect(() => {
    loadTask();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/tasks/${id}`, task);
    history.push("/");
  };

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:3000/tasks/${id}`);
    setTask(result.data);
  };
  return (
    <div className="container title">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Task</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Task"
              title="title"
              value={title}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Update</button>
          <Link className="btn btn-dark btn-block" to="/">
            Back to Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default EditTask;
