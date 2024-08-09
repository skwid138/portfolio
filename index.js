// JS to handle the collapsible summary section
const showMoreBtnHandler = (event) => {
  const container = document.getElementById('summary-container');
  const fade = document.getElementById('summary-fade');
  const btn = document.getElementById('show-more-btn');
  if (container.classList.contains('expanded')) {
    container.classList.remove('expanded');
    fade.style.display = 'block';
    btn.textContent = 'Show More';
  } else {
    container.classList.add('expanded');
    fade.style.display = 'none';
    btn.textContent = 'Show Less';
  }
};

const addShowMoreBtnHandler = () => {
  const elBtn = document.getElementById('show-more-btn');
  if (elBtn) {
    elBtn.addEventListener('click', showMoreBtnHandler);
  }
};

const init = () => {
  addShowMoreBtnHandler();
};

window.onload = init;