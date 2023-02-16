function addInput() {
  const ul = document.getElementById("inputs");

  const newLi = document.createElement("li");
  newLi.className = "list-item";
  newLi.innerText = "Novo input: ";

  const newinput = document.createElement("input");
  newinput.type = "text";
  newinput.name = "input";

  newLi.appendChild(newinput);
  ul.appendChild(newLi);
}
