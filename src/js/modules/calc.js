import {postData} from '../services/requests';

const cals = (size, material, options, promo, result) => {
  const sizeBlock = document.querySelector(size);
  const materialBlock = document.querySelector(material);
  const optionsBlock = document.querySelector(options);
  const promoBlock = document.querySelector(promo);
  const resultBlock = document.querySelector(result);

  let sum = 0;

  const calcFunc = () => {
    sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

    if(sizeBlock.value == '' || materialBlock.value == ''){
      resultBlock.textContent = 'Пожалуйста, выберите размер и материал картины';
    }else if(promoBlock.value === "IWANTPOPART") {
      resultBlock.textContent = Math.round(sum * 0.7);
    }else {
      resultBlock.textContent = sum;
    }
  };

  sizeBlock.addEventListener('change', calcFunc);
  materialBlock.addEventListener('change', calcFunc);
  optionsBlock.addEventListener('change', calcFunc);
  promoBlock.addEventListener('input', calcFunc);

};

export default cals;