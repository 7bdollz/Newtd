import { content, taskArrays } from "..";
import { loadTasksPage } from "../pages/loadtaskspage";
import { task } from "./createtask";
let createmodalfortasks = () => {
  let modal = document.createElement("dialog");
  let titlelabel = document.createElement("label");
  titlelabel.textContent = "Title:";
  let title = document.createElement("input");
  title.type = "text";
  title.name = "title";
  title.id = "title";
  titlelabel.appendChild(title);
  let descriptionlabel = document.createElement("label");
  let description = document.createElement("input");
  description.type = "text";
  description.name = "description";
  description.id = "description";
  descriptionlabel.textContent = "Description:";
  descriptionlabel.appendChild(description);
  let datelabel = document.createElement("label");
  datelabel.textContent = "Date due:";
  let date = document.createElement("input");
  date.type = "date";
  date.id = "duedate";
  date.name = "date";
  datelabel.appendChild(date);
  datelabel.setAttribute("class", "modallabels");
  descriptionlabel.setAttribute("class", "modallabels");
  titlelabel.setAttribute("class", "modallabels");

  //add buttons//
  let cancelbtn = document.createElement("button");
  cancelbtn.textContent = "cancel";
  cancelbtn.classList = "mbtn";
  cancelbtn.addEventListener("click", () => {
    modal.close();
  });
  let createbtn = document.createElement("button");
  createbtn.textContent = "create";
  createbtn.classList = "mbtn";
  createbtn.addEventListener("click", () => {
    console.log("Date input value:", date.value); // Add this line for debugging
    let newtask = new task(title.value, description.value, date.value);
    taskArrays.push(newtask);
    modal.close();
    loadTasksPage(); // Call loadProjectsPage to refresh the content
  });
  modal.appendChild(titlelabel);
  modal.appendChild(descriptionlabel);
  modal.appendChild(datelabel);
  modal.appendChild(createbtn);
  modal.appendChild(cancelbtn);
  content.appendChild(modal);
  modal.showModal();
};

export { createmodalfortasks };
