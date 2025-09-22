//imports//
import { createmodalforproject } from "../fucntions/createmodalfunction";
import { content, projectArrays } from "..";
import { project } from "../fucntions/createproject";
import { createmodalfortasks_projects } from "../fucntions/createmodalfortaskaschildofproject";
import { showtask } from "../fucntions/showtasks";

let loadProjectsPage = () => {
  content.innerHTML = "";
  let addprbtn = document.createElement("button");
  addprbtn.textContent = "create project+";
  content.appendChild(addprbtn);
  addprbtn.setAttribute("class", "addbutton");
  addprbtn.addEventListener("click", () => {
    //create modal//
    createmodalforproject();
  });
  projectArrays.forEach((project) => {
    let projectinfodiv = document.createElement("div");
    projectinfodiv.setAttribute("class", "infodiv");
    projectinfodiv.dataset.id = project.id;
    let btndiv = document.createElement("div");
    btndiv.classList = "btndiv";
    let title = document.createElement("p");
    let duedate = document.createElement("p");
    let description = document.createElement("p");
    let addbtn = document.createElement("button");
    let deletebtn = document.createElement("button");
    let showtaskbtn = document.createElement("button");

    //add textcontent to buttons//
    showtaskbtn.textContent = "show tasks";
    addbtn.textContent = "Add task";
    deletebtn.textContent = "delete";
    //add eventlisteners to buttons//
    showtaskbtn.addEventListener("click", () => {
      showtask(project);
    });
    addbtn.addEventListener("click", () => {
      createmodalfortasks_projects(project);
    });
    deletebtn.addEventListener("click", () => {
      projectinfodiv.remove();
      let projectToRemove = projectinfodiv.dataset.id;
      let bookdiv = document.querySelector(`[data-id="${projectToRemove}"]`);
      if (bookdiv) {
        bookdiv.remove();
      }
      let indextoremove = projectArrays.findIndex(
        (project) => project["id"] == projectToRemove
      );
      if (indextoremove > -1) {
        projectArrays.splice(indextoremove, 1);
      }
    });
    let btns = [addbtn, deletebtn, showtaskbtn];
    //add btns to btndiv//
    for (let child of btns) {
      btndiv.appendChild(child);
    }
    title.textContent = `title:${project.title}`;
    duedate.textContent = `Deadline:${project.date}`;
    description.textContent = `Description:${project.description}`;
    let projectinfo = [title, description, duedate, btndiv];
    for (let child of projectinfo) {
      projectinfodiv.appendChild(child);
    }

    content.appendChild(projectinfodiv);
  });
};

export { loadProjectsPage };
