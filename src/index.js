//imports//
import "./style.css";
import { loadEventsPage } from "./pages/loadeventspage";
import { loadProjectsPage } from "./pages/loadprojectspage";
import { loadTasksPage } from "./pages/loadtaskspage";
import { loadfromstorage } from "./fucntions/storage";
import { searchitems } from "./fucntions/search";

let dateBar = document.querySelector("#datebar");
let searchBar = document.querySelector("#searchbar");
let dashbaord = document.querySelector("#dashboard");
let content = document.querySelector("#content");

//set dateBar//
let day = document.createElement("div");
let currentDay = document.createElement("p");
currentDay.id = "currentday";
day.textContent = "Today";
//get todays date and assign to currentDay//
let getDate = () => {
  const today = new Date();

  let day = today.getDate().toString().padStart(2, "0");
  let month = (today.getMonth() + 1).toString().padStart(2, "0");
  let year = today.getFullYear().toString().slice(-2);

  return `${day}-${month}-${year}`;
};
currentDay.textContent = getDate();
dateBar.appendChild(day);
day.appendChild(currentDay);

//set searchbar //
let searchinput = document.createElement("input");
searchinput.type = "search";
searchinput.placeholder = "search tasks or projects with id";
searchinput.id = "search";
searchBar.appendChild(searchinput);
let searchbtn = document.createElement("button");
searchbtn.addEventListener("click", () => {
  let query = searchinput.value.trim();
  if (query !== "") {
    searchitems(query);
  }
});
searchbtn.id = "searchbtn";
searchbtn.textContent = "search";
searchBar.appendChild(searchbtn);

//set dashboard//
let dashbaorditems = document.createElement("ul");
let projectsection = document.createElement("li");
let tasksection = document.createElement("li");
let eventsection = document.createElement("li");

projectsection.class = "dashboarditems";
projectsection.textContent = "projects";
tasksection.class = "dashboarditems";
tasksection.textContent = "tasks";
eventsection.class = "dashboarditems";
eventsection.textContent = "events";

let sections = [projectsection, tasksection, eventsection];

for (let childs of sections) {
  dashbaorditems.appendChild(childs);
}

dashbaord.appendChild(dashbaorditems);

//create  arrays to store tasks and projects//

let taskArrays = [];
let projectArrays = [];
let eventArrays = [];
//add eventlisteners to dashboarditems//
loadfromstorage();
projectsection.addEventListener("click", () => {
  loadProjectsPage();
});

tasksection.addEventListener("click", () => {
  loadTasksPage();
});

eventsection.addEventListener("click", () => {
  loadEventsPage();
});

console.log(projectArrays);
export { content, taskArrays, projectArrays, eventArrays };
