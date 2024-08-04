const elements = {
  default: document.querySelector('.default'),
  webDev: document.querySelector('.web-dev'),
  uiUx: document.querySelector('.ui-ux'),
  dsa: document.querySelector('.dsa'),
  python: document.querySelector('.python'),
  scraping: document.querySelector('.scraping'),
  git: document.querySelector('.git'),
  others: document.querySelector('.others'),

  webDevId: document.getElementById('web-dev'),
  uiUxId: document.getElementById('ui-ux'),
  dsaId: document.getElementById('dsa'),
  pythonId: document.getElementById('python'),
  scrapingId: document.getElementById('scraping'),
  gitId: document.getElementById('git'),
  scriptId: document.getElementById('script'),
};

const showElement = (elementToShow, elementToHide) => {
  elementToShow.style.display = 'block';
  elementToHide.style.display = 'none';
};

const hideDefault = (element) => {
  elements.default.style.display = 'none';
};

['webDev', 'uiUx', 'dsa', 'python', 'scraping', 'git', 'others'].forEach((id) => {
  const element = elements[id];
  if (element) {
    element.addEventListener('mouseover', () => showElement(elements[id], elements.default));
    element.addEventListener('mouseout', () => showElement(elements.default, elements[id]));
  }
});



elements.webDevId.addEventListener('mouseover', () => showElement(elements.webDev, elements.default));
elements.webDevId.addEventListener('mouseout', () => showElement(elements.default, elements.webDev));

elements.uiUxId.addEventListener('mouseover', () => showElement(elements.uiUx, elements.default));
elements.uiUxId.addEventListener('mouseout', () => showElement(elements.default, elements.uiUx));

elements.dsaId.addEventListener('mouseover', () => showElement(elements.dsa, elements.default));
elements.dsaId.addEventListener('mouseout', () => showElement(elements.default, elements.dsa));

elements.pythonId.addEventListener('mouseover', () => showElement(elements.python, elements.default));
elements.pythonId.addEventListener('mouseout', () => showElement(elements.default, elements.python));

elements.scrapingId.addEventListener('mouseover', () => showElement(elements.scraping, elements.default));
elements.scrapingId.addEventListener('mouseout', () => showElement(elements.default, elements.scraping));

elements.gitId.addEventListener('mouseover', () => showElement(elements.git, elements.default));
elements.gitId.addEventListener('mouseout', () => showElement(elements.default, elements.git));

elements.scriptId.addEventListener('mouseover', () => showElement(elements.others, elements.default));
elements.scriptId.addEventListener('mouseout', () => showElement(elements.default, elements.others));

