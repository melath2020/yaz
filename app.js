var menu= document.querySelector('#nav-btn')
var menuwrapper=document.querySelector('.mobile-nav-wrapper')
var close= document.querySelector('#close-btn')

menu.addEventListener('click',function(e){
    menuwrapper.style.display='block';
    close.style.display='block';
    menu.style.display='none'
})

close.addEventListener('click',function(e){
    menuwrapper.style.display='none';
    close.style.display='none';
    menu.style.display='block'
})





