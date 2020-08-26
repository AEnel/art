const accordion = (selector) => {
  const btns = document.querySelectorAll(selector);

  btns.forEach(btn => {
    btn.addEventListener('click', function() {
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');

      if(this.classList.contains('active-style')){
        this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
        this.nextElementSibling.classList.toggle('active-style');
      }else{
        this.nextElementSibling.style.maxHeight = '0px';
      }
    });
  });

  function show() {
    this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';
    this.nextElementSibling.classList.toggle('active-style');
  }

  function hide() {
    this.nextElementSibling.style.maxHeight = '0px';

  }
};

export default accordion;