'use strict'

//프로젝트 필터링관련 로직 처리
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');

categories.addEventListener('click', (event) => {
    const filter = event.target.dataset.category;
    if(filter == null){
        return ;
    }
    //active 메뉴를 재설정
    activeHandler(event.target);
    // 프로젝트 필터링
    filterProjects(filter);
});


    function activeHandler(target){
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}


    function filterProjects(filter){
    projects.forEach(filter => {
        if(filter === 'all' || filter === project.dataset.type){
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
        //에니메이션 효과
        projectsContainer.classList.add('anim-out');
        setTimeout(() => {
        projectsContainer.classList.remove('anim-out');
    }, 250);
}