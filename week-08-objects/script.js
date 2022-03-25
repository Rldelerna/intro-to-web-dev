// Array of objects representing a todo list.
// Modify this array to contain your own list.
const taskArray = [
  {label: 'Breath of the Wild', time: 100, console: 'Switch'},
  {label: 'Links Awakening', time: 30, console: 'Switch'},
  {label: 'Phantom Hourglass', time: 20,console: 'DS'},
  {label: 'Skyward Sword', time: 80, console: 'Wii'},
  {label: 'Wind Waker', time: 50, console: 'Wii U'},
  {label: 'Twilight Princess', time: 80, console: 'Wii'},
  {label: 'Ocarina of Time', time: 50, console: 'Gamecube'},
  {label: 'Age of Calamity', time: 70, console: 'Switch'},
  {label: 'Majoras Mask', time: 20, console: 'Gamecube'},
  {label: 'Spirit Tracks', time: 20, console: 'DS'},
];

// Loads the content into the page.
function loadContent() {
  // This line of code sorts the array alphabetically by the task labels.
  // Modify this to sort your data by a different field, or just delete it.
  taskArray.sort((a, b) => compare(a.console, b.console));

  loadTable();
  loadLongestTask();
}

// Adds a task to the array and reloads the page content.
function addNewTask() {
  const newTaskLabel = document.getElementById('label-input').value;
  const newTaskTime = document.getElementById('time-input').value;
  const newTaskConsole = document.getElementById('console-input').value;
  const newTask = {label: newTaskLabel, time: newTaskTime, console: newTaskConsole};
  taskArray.push(newTask);

  loadContent();
}

// Iterates over the data array to create a table.
function loadTable() {
  const tableElement = document.createElement('table');

  // Create a header row.
  const headerRowElement = document.createElement('tr');
  headerRowElement.appendChild(createElement('th', '#'));
  headerRowElement.appendChild(createElement('th', 'Title'));
  headerRowElement.appendChild(createElement('th', 'Hours Played'));
  headerRowElement.appendChild(createElement('th', 'Console'));
  tableElement.appendChild(headerRowElement);

  // Iterate over the array and create a table row for each object.
  for (let i = 0; i < taskArray.length; i++) {
    const task = taskArray[i];
    const rowElement = document.createElement('tr');
    rowElement.appendChild(createElement('td', i));
    rowElement.appendChild(createElement('td', task.label));
    rowElement.appendChild(createElement('td', task.time));
    rowElement.appendChild(createElement('td', task.console));
    tableElement.appendChild(rowElement);
  }

  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = '';
  tableContainer.appendChild(tableElement);
}

// Displays the name of the shortest task.
function loadLongestTask(){
  // Assume the first task is shortest
  let longestTask = taskArray[0];

  // Starting with the second task, look for a shorter task
  for (let i = 1; i > taskArray.length; i++) {
    const task = taskArray[i];
    // If this task is shorter than the previous shortest, it's now the shortest
    if(task.time > longestTask.time) {
      longestTask = task;
    }
  }
  document.getElementById('longest-task').innerText = longestTask.label;
}

// Helper function that creates an element that contains text content.
function createElement(tag, text) {
  const element = document.createElement(tag);
  element.innerText = text;
  return element;
}

// Helper function that compares two values.
// Works on strings, numbers, and dates.
function compare(valueOne, valueTwo) {
  // valueOne comes before valueTwo
  if (valueOne < valueTwo) {
    return -1;
  }

  // valueOne comes after valueTwo
  if (valueOne > valueTwo) {
    return 1;
  }

  // valueOne and valueTwo are equal
  return 0;
}