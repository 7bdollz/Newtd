//imports//
import { createmodalforevent } from "../fucntions/createmodalforevent";
import { content, eventArrays } from "..";
let loadEventsPage = () => {
  content.innerHTML = "";
  let addprbtn = document.createElement("button");
  addprbtn.textContent = "Add events+";
  content.appendChild(addprbtn);
  addprbtn.setAttribute("class", "addbutton");
  addprbtn.addEventListener("click", () => {
    //create modal//
    createmodalforevent();
    console.log(eventArrays);
  });
  eventArrays.forEach((project) => {
    let projectinfodiv = document.createElement("div");
    projectinfodiv.setAttribute("class", "infodiv");

    let title = document.createElement("p");
    let duedate = document.createElement("p");
    let description = document.createElement("p");
    let deletebtn = document.createElement("button");

    deletebtn.textContent = "delete";
    title.textContent = `title:${project.title}`;
    duedate.textContent = `Date:${project.date}`;
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
      let indextoremove = eventArrays.findIndex(
        (project) => project["id"] == projectToRemove
      );
      if (indextoremove > -1) {
        eventArrays.splice(indextoremove, 1);
      }
    });

    content.appendChild(projectinfodiv);
  });
};

export { loadEventsPage };
