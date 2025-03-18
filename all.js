let dropdownBtn = document.querySelector('.sign');
let dropdownmenu = document.querySelector('.aside-menu');

dropdownBtn.addEventListener('click',()=>{
    dropdownmenu.classlist.toggle('hide');
})