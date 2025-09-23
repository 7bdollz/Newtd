import { content, projectArrays, taskArrays, eventArrays } from "..";
import { loadfromstorage } from "./storage";

function searchitems(query) {
  content.innerHTML = "";
  loadfromstorage();
  let results = [];

  //search projects//
  projectArrays.forEach((p) => {
    if (
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.date.includes(query)
    ) {
      results.push({
        type: "Project",
        title: p.title,
        description: p.description,
        date: p.date,
      });
    }
  });

  //search tasks//
  taskArrays.forEach((p) => {
    if (
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.date.includes(query)
    ) {
      results.push({
        type: "Task",
        title: p.title,
        description: p.description,
        date: p.date,
      });
    }
  });

  //search events//
  eventArrays.forEach((p) => {
    if (
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.date.includes(query)
    ) {
      results.push({
        type: "Event",
        title: p.title,
        description: p.description,
        date: p.date,
      });
    }
  });

  if (results.length === 0) {
    let msg = document.createElement("p");
    msg.textContent = "No results found.";
    content.appendChild(msg);
  } else {
    results.forEach((r) => {
      let resultdiv = document.createElement("div");
      resultdiv.classList.add("resultdiv");
      let type = document.createElement("h3");
      type.textContent = r.type;
      let title = document.createElement("p");
      title.textContent = `Title:${r.title}`;
      let description = document.createElement("p");
      description.textContent = `Description:${r.description}`;
      let date = document.createElement("p");
      date.textContent = `DAte:${r.date}`;
      let children = [type, title, description, date];
      children.forEach((child) => {
        resultdiv.appendChild(child);
        content.appendChild(resultdiv);
      });
    });
  }
}

export { searchitems };
