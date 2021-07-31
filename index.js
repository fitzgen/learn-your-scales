import assert from "./assert.js";
import onReady from "./on-ready.js";

function main() {
  const scale = document.getElementById("scale");
  const degree = document.getElementById("degree");
  const next = document.getElementById("next");
  const answer = document.getElementById("answer");
  const answerNote = document.getElementById("answer-note");
  const answerButton = document.getElementById("answer-button");

  function showAnswer() {
    answerButton.setAttribute("hidden", "");
    answer.removeAttribute("hidden");
  }

  function hideAnswer() {
    answer.setAttribute("hidden", "");
    answerButton.removeAttribute("hidden");
  }

  function newScaleAndDegree() {
    hideAnswer();

    const newScale = randomScale();
    const newDegree = randomInt(0, 7);

    answerNote.textContent = newScale.notes[newDegree];
    scale.textContent = newScale.name;
    degree.textContent = (newDegree + 1).toString();
  }

  // Choose a new scale and degree when...
  //
  // ...the user clicks the button.
  next.addEventListener("click", newScaleAndDegree);
  // ...the user presses a key.
  window.addEventListener("keypress", newScaleAndDegree);

  // Show the answer if the user needs help.
  answerButton.addEventListener("click", showAnswer);

  // Finally, choose an initial scale and degree!
  newScaleAndDegree();
}

function randomInt(min, max) {
  const len = max - min;
  const n = Math.floor(Math.random() * len);
  const result = min + n;
  assert(
    min <= result && result < max,
    "result should be in range"
  );
  return result;
}

function randomElement(array) {
  assert(array.length > 0, "array should not be empty");
  const i = randomInt(0, array.length);
  return array[i];
}

const SCALES = [
  { name: "C major", notes: ["C", "D", "E", "F", "G", "A", "B"] },
  { name: "D major", notes: ["D", "E", "F♯", "G", "A", "B", "C♯"] },
  { name: "E major", notes: ["E", "F♯", "G♯", "A", "B", "C♯", "D♯"] },
  { name: "G major", notes: ["G", "A", "B", "C", "D", "E", "F♯"] },
  { name: "A major", notes: ["A", "B", "C♯", "D", "E", "F♯", "G♯"] },
  { name: "B major", notes: ["B", "C♯", "D♯", "E", "F♯", "G♯", "A♯"] },
];

function randomScale() {
  return randomElement(SCALES);
}

onReady(main);
