import { project } from "./createproject";
import { task } from "./createtask";
import { projectArrays, taskArrays, eventArrays } from "..";
import { event } from "./createevent";

function savetostorage() {
  localStorage.setItem("projects", JSON.stringify(projectArrays));
  localStorage.setItem("tasks", JSON.stringify(taskArrays));
  localStorage.setItem("events", JSON.stringify(eventArrays));
}

function loadfromstorage() {
  let savedprojects = JSON.parse(localStorage.getItem("projects")) || [];
  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let savedEvents = JSON.parse(localStorage.getItem("events")) || [];

  projectArrays.length = 0;
  taskArrays.length = 0;
  eventArrays.length = 0;

  savedprojects.forEach((p) => {
    let newproj = new project(p.title, p.description, p.date);
    if (p.tasks && Array.isArray(p.tasks)) {
      p.tasks.forEach((t) => {
        let newtask = new task(t.title, t.description, t.date);
        newproj.addTask(newtask);
      });
    }
    projectArrays.push(newproj);
  });
  savedTasks.forEach((t) => {
    taskArrays.push(new task(t.title, t.description, t.date));
  });
  savedEvents.forEach((e) => {
    eventArrays.push(new event(e.title, e.description, e.date));
  });
}

export { savetostorage, loadfromstorage };
