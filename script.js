const textElement = document.getElementById("demo-text-el");

console.log(textElement);
textElement.textContent = "Hello Worlds";

const pTag = document.createElement("p");
console.log(pTag);
pTag.textContent = "random stuff";
const injectContainer = document.getElementById("dom-node-content-to-inject");
injectContainer.appendChild(pTag);

function createPInContainerWithText(containerId, text) {
  const p = document.createElement("p");
  p.textContent = text;
  const injectContainer = document.getElementById(containerId);
  injectContainer.appendChild(p);
}

createPInContainerWithText(
  "dom-node-content-to-inject",
  "Super Cala Fraja Licious Expi Ala Docious",
);
