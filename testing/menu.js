function onClick() {
  const wrapper = document.querySelector(".menu-wrapper");
  const menu = document.querySelector(".menu");
  wrapper.classList.add("menu-wrapper-enter");
  menu.classList.add("menu-show");
}

function onClose() {
  const wrapper = document.querySelector(".menu-wrapper");
  const menu = document.querySelector(".menu");
  wrapper.classList.add("menu-wrapper-exit");
  menu.classList.add("menu-exit");
  setTimeout(() => {
    wrapper.classList.remove("menu-wrapper-enter");
    wrapper.classList.remove("menu-wrapper-exit");
    menu.classList.remove("menu-exit");
  }, 500);
}

document.querySelector(".open").addEventListener("click", onClick);

document.querySelector(".close").addEventListener("click", onClose);
