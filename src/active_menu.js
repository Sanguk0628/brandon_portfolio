'use strict'
// 1. 모든 섹션 요소들과 메뉴 아이템들을 가지고 온다.
// 2. intersectionObserver를 사용해서 모든 섹션들을 관찰해야한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.
// *보여지는 섹션: 
// -다수의 섹션이 동시에 보여진다면, 가장 첫번째 섹션을 선택
// -마지막 contact 섹션이 보여진다면, 그러면 가장 마지막 섹션을 선택

const sectionIds = ['#home', '#introduces', '#work', '#skills', '#about', '#contact',]; //일단 다 불러놓고
const sections = sectionIds.map((id) => document.querySelector(id)); //모든 섹션들을 가져온 배열임(새로운 배열로 매핑해줌)
const navItems = sectionIds.map((id) => //모든 내부 아이템을 가지고 있는 배열(헤더에서 가져옴)
    document.querySelector(`[href="${id}"]`)
); 
const visibleSections = sectionIds.map(() => false); //어떤게 보여지는지 가지고 있는 배열
let activeNavItem = navItems[0];
//옵션으로 두가지 문제해결(보이는 부분 비율따라, 맨 마지막 보이는 부분)
const options = {
    rootMargin: '-20% 0px 0px 0px',     // 관찰할 수 있는 부모 컨테이너를 작게 함
    threshold: [0, 0.98],
};

//옵저버 설정
const observer = new IntersectionObserver(observerCallback, options); //옵저버 설정
sections.forEach((section) => observer.observe(section)); //옵저버에게 관찰 요구

//콜백 함수 설정
function observerCallback(entries){
    //true인지 아닌지 flag에 저장
    let selectLastOne; // 제일 마지막 컨택이 되는 경우
    entries.forEach((entry) => {
        const index = sectionIds.indexOf(`#${entry.target.id}`); //진입한 섹션의 아이디의 인덱스를 알려줌
        visibleSections[index] = entry.isIntersecting; //보여지고 있는지 업데이트
        selectLastOne = 
        index === sectionIds.length - 1 && entry.isIntersecting && entry.intersectionRatio >= 0.95; //맨 마지막인 경우
    });
    const navIndex = selectLastOne ? sectionIds.length - 1 : findFirstIntersecting(visibleSections);
    selectNavItem(navIndex);
};

function selectNavItem(index){
    const navItem = navItems[index];
    if(!navItem) return;
    activeNavItem.classList.remove('active');
    activeNavItem = navItem;
    activeNavItem.classList.add('active');
};

function findFirstIntersecting(visivleSections) {
    const index = visibleSections.indexOf(true);
    return index >= 0 ? index : 0;
};


