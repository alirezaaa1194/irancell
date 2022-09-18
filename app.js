function menuBtnFunction(menuBtn) {
    menuBtn.classList.toggle("active");
}
let searchlink=document.getElementById('searchlink');
let txt=document.getElementById('txt');
let box=document.getElementById('box');

txt.addEventListener("click", function a(){
box.style.backgroundColor='#fff'
txt.style.width='100%'
txt.style.paddingRight='3px'
txt.style.paddingLeft='3px'
})
searchlink.addEventListener("click", function a(){
    box.style.width='150px'
    txt.style.width='100%'
    txt.style.paddingRight='3px'
    txt.style.paddingLeft='3px'
    if(txt.value.length>0){
        box.style.backgroundColor='#fff'
    }
    })
function banone(){
    box.style.background='none'
    box.style.width='39px'
    box.style.borderColor='#fc0'
}
box.addEventListener("click", function b(){
    box.style.width='150px'
    box.style.borderWidth='2px';
    box.style.borderStyle='solid';
    box.style.borderColor='black';
    txt.style.paddingRight='3px'
    txt.style.paddingLeft='3px'
    if(txt.value.length>0){
        searchlink.setAttribute('href', 'https://google.com');
    }
})