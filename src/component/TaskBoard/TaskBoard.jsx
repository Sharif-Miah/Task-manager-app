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
    tags: ["web", "python", "javsScript"],
    priority: "High",
    isFavorit: false,
  };

  const [tasks, setTasks] = useState([initialTask]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [updateToTask, setUpdateToTask] = useState(null);

  const addTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks([...tasks, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }
    setIsOpenModal(false);
  };

  const handleEditTask = (task) => {
    console.log(task);
    setUpdateToTask(task);
    setIsOpenModal(true);
  };

  return (
    <section className="mb-20 max-w-7xl mx-auto" id="tasks">
      {isOpenModal && (
        <ModalTaskForm
          onSave={addTask}
          updateToTask={updateToTask}
          setIsOpenModal={setIsOpenModal}
        />
      )}
      <div className="container">
        <div className="p-2 flex justify-end">
          <TaskSerchInput />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onOpenModal={() => setIsOpenModal(true)} />
          <TaskList tasks={tasks} onEdit={handleEditTask} />
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
