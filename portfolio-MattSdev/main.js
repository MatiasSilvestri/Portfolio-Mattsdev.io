const promptInput = document.getElementById('promptInput');
const terminal = document.getElementById('terminal');
const terminalWindow = document.getElementById('terminalWindow');
const date = document.getElementById('date');

promptInput.focus();
date.innerText = new Date().toDateString();
terminalWindow.addEventListener('click', () => promptInput.focus());

promptInput.addEventListener('keydown', (event) => {
  if (event.key === "Enter") {
    enterCommand(event);
  }
})

const enterCommand = (event) => {
  const promptElement = document.getElementById('promptClone').cloneNode(true);
  promptElement.classList.remove('hidden');
  promptElement.getElementsByClassName('promtCloneInput')[0].innerHTML = event.target.value;
  promptElement.removeAttribute('id');
  promptElement.getElementsByClassName('promptCloneContent')[0].appendChild(selectCommandBlock(event.target.value));
  terminal.appendChild(promptElement);
  promptInput.value = '';
  promptInput.scrollIntoView({block: 'start'});
}
  
const selectCommandBlock = (command) => {
  const lowerCommand = command.toLowerCase();
  switch (lowerCommand) {
    case 'help': // -> Displays by console the list of commands
    case 'about': // -> Displays by console the list of commands
    case 'social': // -> Show by console the 'About Me' section
    case 'education': // -> Show by console the titles I have
    case 'achievements': // -> show my achievements
    case 'other knowledge': // -> Knowledge in Bash (GNU/linux), GIT, Docker Non Relational Database and Postman
    case 'idiom': // -> It shows the languages I speak and communicate in
    case 'programming languages': // -> Shows the programming languages I specialise in
    case 'frameworks & laiberes': // -> Shows the programming languages I specialise in
    case 'projects': // -> Command that lists the projects you work on
      return getCommandTemplate(lowerCommand);
    case 'clear': // -> Cleans the termianl
      return clearCommand();
    default:
      return notFoundCommand(command);
  }
}
  
const getCommandTemplate = (command) => {
  const element = document.getElementById(command).cloneNode(true);
  element.classList.remove('hidden');
  element.removeAttribute('id');
  return element;
}

function clearCommand() {
  terminal.innerHTML = '';
  const element = document.createElement('span');
  return element;
}

const notFoundCommand = (command) => {
  const element = document.createElement('span');
  element.innerText = `-bash: ${command}: command not found`;
  element.classList.add('error');
  return element;
}