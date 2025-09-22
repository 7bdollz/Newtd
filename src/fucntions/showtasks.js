import { content } from "..";
import { loadProjectsPage } from "../pages/loadprojectspage";
import { createmodalfortasks_projects } from "./createmodalfortaskaschildofproject";
let showtask = (prj) => {
  content.innerHTML = "";
  let backbtn = document.createElement("button");
  backbtn.textContent = "Back";
  backbtn.addEventListener("click", () => {
    loadProjectsPage();
  });
  content.appendChild(backbtn);
  if (prj.tasks.length === 0) {
    let addbtn = document.createElement("button");
    addbtn.classList = "mbtn";
    addbtn.textContent = "add task";
    addbtn.addEventListener("click", () => {
      console.log("ahh");
      let modal = createmodalfortasks_projects(prj);
      modal.addEventListener("close", () => {
        showtask(prj);
      });
    });
    content.appendChild(addbtn);
  } else {
    for (let i = 0; i < prj.tasks.length; i++) {
      let taskdiv = document.createElement("div");
      taskdiv.classList = "taskdiv";
      taskdiv.dataset.id = prj.tasks[i].id;
      let title = document.createElement("p");
      let description = document.createElement("p");
      let date = document.createElement("p");

      let deletebtn = document.createElement("button");

      deletebtn.addEventListener("click", () => {
        prj.tasks.splice(i, 1);
        showtask(prj);
      });
      //add text contents to dom elements//
      deletebtn.textContent = "delete";
      title.textContent = `Title:${prj.tasks[i].title}`;
      description.textContent = `Description:${prj.tasks[i].description}`;
      date.textContent = `Date:${prj.tasks[i].date}`;
      let taskdivcontents = [title, description, date, deletebtn];
      for (let child of taskdivcontents) {
        taskdiv.appendChild(child);
      }

      content.appendChild(taskdiv);
    }
  }
};

export { showtask };
