/* menu scripts */


/* menu is opened */
function onClick() {
  const wrapper = document.querySelector(".menu-wrapper");
  const menu = document.querySelector(".menuContent");
  wrapper.classList.add("menu-wrapper-enter");
  menu.classList.add("menuContent-show");
}

/* menu is closed */
function onClose() {
  const wrapper = document.querySelector(".menu-wrapper");
  const menu = document.querySelector(".menuContent");
  wrapper.classList.add("menu-wrapper-exit");
  menu.classList.add("menuContent-exit");
  
  setTimeout(() => {
    wrapper.classList.remove("menu-wrapper-enter");
    wrapper.classList.remove("menu-wrapper-exit");
    menu.classList.remove("menuContent-exit");
  }, 500);
}

document.querySelector(".openMenu").addEventListener("click", onClick);

document.querySelector(".closeMenu").addEventListener("click", onClose);


/* modal scripts */
setTimeout(()=>{
  document.getElementById("openModal").addEventListener("click", function openModal() {
    const dialog = document.querySelector('.dialog');
    dialog.classList.add("dialogFadeIn");
    dialog.classList.remove("dialogFadeOut");
    console.log("open", dialog.classList);

})

  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    const dialog = document.querySelector('.dialog');
    dialog.classList.remove("dialogFadeIn");
    dialog.classList.add("dialogFadeOut");
    console.log("close", dialog.classList);
    setTimeout(dialogClosure, 300);
})
}, 200)

function dialogClosure(){
  const dialog = document.querySelector('.dialog');
  dialog.classList.remove("dialogFadeOut");
  console.log("waited", dialog.classList);
}



/* side scrolling */
$('#recipeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});

