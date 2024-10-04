/* eslint-disable no-unused-vars */
import { useState } from "react";
import TaskActions from "../TaskActions/TaskActions";
import TaskList from "../TaskList/TaskList";
import TaskSerchInput from "../TaskSerchInput/TaskSerchInput";

const TaskBoard = () => {
  const initialTask = {
    id: crypto.randomUUID(),
    tittle: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "javaScript", "react"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([initialTask]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <TaskSerchInput />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
