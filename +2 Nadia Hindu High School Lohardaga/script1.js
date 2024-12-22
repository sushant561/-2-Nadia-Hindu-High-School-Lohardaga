const navLinks = document.getElementById('navLinks');
const menuLines = document.querySelector('.threeLineIcon');
const falseIcon = document.querySelector('.falseIcon');


menuLines.addEventListener('click', (e)=>{
    navLinks.style.right = '0';
});

falseIcon.addEventListener('click', (e)=>{
    navLinks.style.right = '-200px';
});