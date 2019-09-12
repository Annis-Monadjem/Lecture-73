document.addEventListener('DOMContentLoaded', () => {
  let anchors = document.querySelectorAll('.main-header__item > a');

  for (let anchor of anchors) {
    anchor.addEventListener('click', function(ev) {
      ev.preventDefault();
      for (let active of anchors) {
        if (active.classList.contains('active')) {
          active.classList.remove('active');
          break;
        }
      }
      this.classList.add('active');
    });
  }
});
