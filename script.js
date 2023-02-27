const footer = document.querySelector('.button__footer');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;
  console.log("currentScrollPos",currentScrollPos)
  if (currentScrollPos < 680) {
    footer.classList.remove('show');
  } else if (currentScrollPos > 680) {
    footer.classList.add('show');
  }
  
});
