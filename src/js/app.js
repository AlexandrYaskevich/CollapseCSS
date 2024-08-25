const button = document.querySelector('.button');

button.addEventListener('click', toggleCollapse); 

const target = document.querySelector('.target');
const content = document.querySelector('.content');
let isOpen = isOpenCollapse(); 

function toggleCollapse() {
  isOpen = isOpenCollapse(); 

  if (!isOpen) {
    target.style.height = `${content.offsetHeight}px`;
  }

  target.classList.add('collapsing');
  target.classList.remove('collapse', 'show');

  if (isOpen) {
    target.style.height = `${content.offsetHeight}px`;
  } else {
  	setTimeout(() => {
    	target.style.height = ''; 
    });
  }

  setTimeout(transitionEnd, 350);  
}

function transitionEnd() {
  target.classList.remove('collapsing');
  target.classList.add('collapse');

  if (isOpen) {
    target.classList.add('show');
  }
}

function isOpenCollapse() {
  return target.classList.contains('collapse') && !target.classList.contains('show');
}
  
