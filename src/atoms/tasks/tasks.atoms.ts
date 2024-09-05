import { atomWithStorage } from "jotai/utils";
import tasks from "@/mock/tasks.json";
import { atom } from "jotai";

export const tasksAtom = atomWithStorage("tasks", tasks, undefined, {
  getOnInit: true,
});

export const totalTasksAtom = atom((get) => {
  const tasks = get(tasksAtom);
  return tasks.length;
});

export const totalCompletedTasksAtom = atom((get) => {
  const tasks = get(tasksAtom);
  const completedTasks = tasks.filter((task) => task.isCompleted);
  return completedTasks.length;
});
