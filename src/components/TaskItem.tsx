import { Task } from "../types";
import dayjs from "dayjs";

interface Props {
  task: Task;
  onClick: () => void;
}

export default function TaskItem({ task, onClick }: Props) {
  return (
    <>
      <div
        onClick={onClick}
        key={task.id}
        className="border-[1px] my-2 p-2 rounded-lg border-slate-700 border-l-indigo-500 border-l-[2px] cursor-pointer">
        <div className="flex justify-between items-center pt-2">
          <h2 className="text-lg font-semibold text-seccondColor">
            {task.title}
          </h2>
        </div>
        <div className="p-2">
          <p className="text-sm">{task.description}</p>
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-seccondColor">
            SubTask
          </span>
          <span className="text-sm font-semibold text-seccondColor">
            {task.subTasks.length}
          </span>
        </div>{" "}
        <div className="flex justify-between items-start text-sm  border-[1px] p-1 rounded-lg border-slate-700 shadow-sm shadow-slate-700">
          <div className="flex flex-col items-center flex-1">
            <span className="text-sm font-semibold text-indigo-500  ">
              Urgency
            </span>
            <span
              className={`font-bold ${
                task.piority === "low"
                  ? "text-green-500 [text-shadow:_2px_2px_10px_rgb(0_201_81_/_0.8)]"
                  : task.piority === "medium"
                  ? "text-yellow-500 [text-shadow:_2px_2px_10px_rgb(239_177_0_/_0.8)]"
                  : "text-red-500 [text-shadow:_2px_2px_10px_rgb(241_44_54_/_0.8)]"
              }`}>
              {task.piority}
            </span>
          </div>
          <div className="flex flex-col items-center flex-1">
            <span className="text-sm font-semibold text-indigo-500 ">
              Status
            </span>
            <span className="text-center">{task.status}</span>
          </div>
          <div className="flex flex-col  items-center flex-1">
            <span className="text-sm font-semibold text-indigo-500 ">
              Deadline
            </span>
            <span
              className={`text-[12px] text-center ${
                task.deadline ? "text-yellow-500" : "text-green-500"
              }`}>
              {task.deadline
                ? dayjs(task.deadline).format("HH:mm DD.MM.YYYY")
                : "No Deadline"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
