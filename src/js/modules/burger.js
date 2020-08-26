const burger = (selector, burger, container) => {
  const menuElem = document.querySelector(selector);
  const burgerElem = document.querySelector(burger);

  menuElem.style.display = 'none';

  burgerElem.addEventListener('click', () => {
    if( menuElem.style.display == 'none' && window.screen.availWidth < 993){
      menuElem.style.display = 'block';
      menuElem.style.zIndex = '12';
    }else{
      menuElem.style.display = 'none';
    }
  });

  window.addEventListener('resize', () => {
    if(window.screen.availWidth > 992){
      menuElem.style.display = 'none';
    }
  });

};

export default burger;