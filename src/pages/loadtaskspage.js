//imports//

import { content, taskArrays } from "..";
import { createmodalfortasks } from "../fucntions/createmodalfortask";
let loadTasksPage = () => {
  content.innerHTML = "";
  let addprbtn = document.createElement("button");
  addprbtn.textContent = "create Tasks+";
  content.appendChild(addprbtn);
  addprbtn.setAttribute("class", "addbutton");
  addprbtn.addEventListener("click", () => {
    //create modal//
    createmodalfortasks();
    console.log(taskArrays);
  });
  taskArrays.forEach((project) => {
    let projectinfodiv = document.createElement("div");
    projectinfodiv.setAttribute("class", "infodiv");
    projectinfodiv.dataset.id = project.id;

    let title = document.createElement("p");
    let duedate = document.createElement("p");
    let description = document.createElement("p");
    let deletebtn = document.createElement("button");

    deletebtn.textContent = "delete";
    title.textContent = `title:${project.title}`;
    duedate.textContent = `Deadline:${project.date}`;
    description.textContent = `Description:${project.description}`;
    let projectinfo = [title, description, duedate, deletebtn];
    for (let child of projectinfo) {
      projectinfodiv.appendChild(child);
    }
    deletebtn.addEventListener("click", () => {
      projectinfodiv.remove();
      let projectToRemove = projectinfodiv.dataset.id;
      let bookdiv = document.querySelector(`[data-id="${projectToRemove}"]`);
      if (bookdiv) {
        bookdiv.remove();
      }
      let indextoremove = taskArrays.findIndex(
        (project) => project["id"] == projectToRemove
      );
      if (indextoremove > -1) {
        taskArrays.splice(indextoremove, 1);
      }
    });

    content.appendChild(projectinfodiv);
  });
};

export { loadTasksPage };
