const slider = document.querySelector(".slider");

function activate(e) {
  const items = document.querySelectorAll(".gitem");
  e.target.matches(".next") && slider.append(items[0]);
  e.target.matches(".prev") && slider.prepend(items[items.length - 1]);
}

document.addEventListener("click", activate, false);

const project_datas = document.querySelectorAll('.project_data');
const projects_all = document.querySelectorAll('.projects');

function removeClicked(){
  project_datas.forEach((project_data) => {
    if(project_data.classList.contains('clicked')){
      project_data.classList.remove('clicked');
    }
  })
}

projects_all.forEach((projects, index)=>{
  projects.addEventListener('click', ()=>{
    removeClicked();
    project_datas[index].classList.add('clicked');
  })
})
