const drop = () => {
  const fileInputs = document.querySelectorAll('[name = upload]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName, preventDefaults, false);
    });
  });

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function highlight(item) {
    item.closest('.file_upload').style.backgroundColor = '#f7e7e6';
    item.closest('.file_upload').style.borderTopLeftRadius =  '20px';
    item.closest('.file_upload').style.borderTopRightRadius =  '20px';
    item.closest('.file_upload').style.borderBottomLeftRadius =  '20px';
    item.closest('.file_upload').style.borderBottomRightRadius =  '20px';
  }

  function unhighlight(item) {
    item.closest('.file_upload').style.border = 'none';
    if(item.closest('.form_calc')){
      item.closest('.file_upload').style.backgroundColor = '#FFFFFF';
    }else {
      item.closest('.file_upload').style.backgroundColor = '#ededed';
    }
  }
  ['dragenter', 'dragover'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName,() => highlight(input), false);
    });
  });
  ['dragleave', 'drop'].forEach(eventName => {
    fileInputs.forEach(input => {
      input.addEventListener(eventName,() => unhighlight(input), false);
    });
  });

  fileInputs.forEach(input => {
    input.addEventListener('drop', (e) => {
      input.files = e.dataTransfer.files;
      let dots;
      const arrSplit = input.files[0].name.split('.');
      arrSplit[0].length > 6 ? dots = '...' : dots = '.';
      const name = arrSplit[0].substring(0, 6) + dots + arrSplit[1];
      input.previousElementSibling.textContent = name;
    });
  });
};

export default drop;