import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const result = await axios.get("http://localhost:3000/tasks");
    setTask(result.data.reverse());
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    loadTasks();
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <Link className="btn btn-dark" to="/add">
        New task
      </Link>
      <div className="py-4">
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th className="action">
                Action&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{task.title}</td>
                <td className="action">
                  <Link
                    class="btn btn-primary mr-2 "
                    to={`/edit/${task.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteTask(task.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
