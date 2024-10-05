/* eslint-disable no-unused-vars */
import { useState } from "react";
import ModalTaskForm from "../ModalTaskForm/ModalTaskForm";
import TaskActions from "../TaskActions/TaskActions";
import TaskList from "../TaskList/TaskList";
import TaskSerchInput from "../TaskSerchInput/TaskSerchInput";

const TaskBoard = () => {
  const initialTask = {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "javaScript", "react"],
    priority: "High",
    isFavorite: true,
  };

  const [tasks, setTasks] = useState([initialTask]);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
    console.log("new task added", newTask);
    setIsOpenModal(false);
  };

  return (
    <section className="mb-20 max-w-7xl mx-auto" id="tasks">
      {isOpenModal && (
        <ModalTaskForm onSave={handleAddTask} setIsOpenModal={setIsOpenModal} />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <TaskSerchInput onOpenModel={() => setIsOpenModal(true)} />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setIsOpenModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
