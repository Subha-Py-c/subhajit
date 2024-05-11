const elements = {
  default: document.querySelector('.default'),
  python: document.querySelector('.python'),
  aiTools: document.querySelector('.ai-tools'),
  htmlCss: document.querySelector('.html-css'),
  uiUx: document.querySelector('.ui-ux'),
  js: document.querySelector('.js'),
  cCpp: document.querySelector('.c-cpp'),
  git: document.querySelector('.git'),
  others: document.querySelector('.others'),
  pythonId: document.getElementById('python'),
  aiId: document.getElementById('ai'),
  htmlCssId: document.getElementById('html-css'),
  uiUxId: document.getElementById('ui-ux'),
  jsId: document.getElementById('js'),
  cId: document.getElementById('c'),
  cppId: document.getElementById('cpp'),
  gitId: document.getElementById('git'),
  gimpId: document.getElementById('gimp'),
  scriptId: document.getElementById('script'),
};

const showElement = (elementToShow, elementToHide) => {
  elementToShow.style.display = 'block';
  elementToHide.style.display = 'none';
};

const hideDefault = (element) => {
  elements.default.style.display = 'none';
};

['python', 'aiTools', 'htmlCss', 'uiUx', 'js', 'cCpp', 'git', 'others'].forEach((id) => {
  const element = elements[id];
  if (element) {
    element.addEventListener('mouseover', () => showElement(elements[id], elements.default));
    element.addEventListener('mouseout', () => showElement(elements.default, elements[id]));
  }
});

elements.pythonId.addEventListener('mouseover', () => showElement(elements.python, elements.default));
elements.pythonId.addEventListener('mouseout', () => showElement(elements.default, elements.python));

elements.aiId.addEventListener('mouseover', () => showElement(elements.aiTools, elements.default));
elements.aiId.addEventListener('mouseout', () => showElement(elements.default, elements.aiTools));

elements.htmlCssId.addEventListener('mouseover', () => showElement(elements.htmlCss, elements.default));
elements.htmlCssId.addEventListener('mouseout', () => showElement(elements.default, elements.htmlCss));

elements.uiUxId.addEventListener('mouseover', () => showElement(elements.uiUx, elements.default));
elements.uiUxId.addEventListener('mouseout', () => showElement(elements.default, elements.uiUx));

elements.jsId.addEventListener('mouseover', () => showElement(elements.js, elements.default));
elements.jsId.addEventListener('mouseout', () => showElement(elements.default, elements.js));

elements.cId.addEventListener('mouseover', () => showElement(elements.cCpp, elements.default));
elements.cId.addEventListener('mouseout', () => showElement(elements.default, elements.cCpp));

elements.cppId.addEventListener('mouseover', () => showElement(elements.cCpp, elements.default));
elements.cppId.addEventListener('mouseout', () => showElement(elements.default, elements.cCpp));

elements.gitId.addEventListener('mouseover', () => showElement(elements.git, elements.default));
elements.gitId.addEventListener('mouseout', () => showElement(elements.default, elements.git));

elements.gimpId.addEventListener('mouseover', () => showElement(elements.others, elements.default));
elements.gimpId.addEventListener('mouseout', () => showElement(elements.default, elements.others));

elements.scriptId.addEventListener('mouseover', () => showElement(elements.others, elements.default));
elements.scriptId.addEventListener('mouseout', () => showElement(elements.default, elements.others));

/*
const elements = [
  { id: 'python', target: 'python' },
  { id: 'ai', target: 'ai_tools' },
  { id: 'html-css', target: 'html_css' },
  { id: 'ui-ux', target: 'ui_ux' },
  { id: 'js', target: 'js' },
  { id: 'c', target: 'c_cpp' },
  { id: 'cpp', target: 'c_cpp' },
  { id: 'git', target: 'git' },
  { id: 'gimp', target: 'others' },
  { id: 'script', target: 'others' }
];

const Default = document.getElementById('default'); // Assuming 'default' is an ID

elements.forEach(({ id, target }) => {
  const element = document.getElementById(id);
  const targetElement = document.querySelector(`.${target}`);
  
  element.addEventListener('mouseover', () => {
    Default.style.display = 'none';
    targetElement.style.display = 'block';
  });
  
  element.addEventListener('mouseout', () => {
    Default.style.display = 'block';
    targetElement.style.display = 'none';
  });
});
*/