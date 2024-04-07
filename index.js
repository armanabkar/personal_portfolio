function debounce(func, wait = 100) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

const reveal = debounce(() => {
  const reveals = document.querySelectorAll(".reveal");
  const revealDistance = 70;

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;

    if (elementTop < windowHeight - revealDistance) {
      reveals[i].classList.add("active");
    }
  }
});

window.addEventListener("scroll", reveal);
