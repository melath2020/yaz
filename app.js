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


// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar-header").style.top = "0";
  } else {
    document.getElementById("navbar-header").style.top = "-250px";
  }
}





