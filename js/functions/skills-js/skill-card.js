
const Default = document.querySelector('.default');
const python = document.querySelector('.python');
const ai_tools = document.querySelector('.ai-tools');
const html_css = document.querySelector('.html-css');
const ui_ux = document.querySelector('.ui-ux');
const js = document.querySelector('.js');
const c_cpp = document.querySelector('.c-cpp');
const git = document.querySelector('.git');
const other = document.querySelector('.others');
const p = document.getElementById('python');
const a = document.getElementById('ai');
const htm = document.getElementById('html-css');
const u = document.getElementById('ui-ux');
const j = document.getElementById('js');
const c = document.getElementById('c');
const cpp = document.getElementById('cpp');
const g = document.getElementById('git');
const gimp = document.getElementById('gimp');
const script = document.getElementById('script');
p.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  python.style.display = 'block'
});
a.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  ai_tools.style.display = 'block'
});
htm.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  html_css.style.display = 'block'
});
u.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  ui_ux.style.display = 'block'
});
j.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  js.style.display = 'block'
});
c.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  c_cpp.style.display = 'block'
});
cpp.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  c_cpp.style.display = 'block'
});
g.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  git.style.display = 'block'
});
gimp.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  other.style.display = 'block'
});
script.addEventListener('mouseover', function() {
  Default.style.display = 'none';
  other.style.display = 'block'
});
p.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  python.style.display = 'none'
});
a.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  ai_tools.style.display = 'none'
});
htm.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  html_css.style.display = 'none'
});
u.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  ui_ux.style.display = 'none'
});
j.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  js.style.display = 'none'
});
c.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  c_cpp.style.display = 'none'
});
cpp.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  c_cpp.style.display = 'none'
});
g.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  git.style.display = 'none'
});
gimp.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  other.style.display = 'none'
});
script.addEventListener('mouseout', function() {
  Default.style.display = 'block';
  other.style.display = 'none'
});