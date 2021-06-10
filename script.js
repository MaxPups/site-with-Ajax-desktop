
function goJson (i) {
  const xhr = new XMLHttpRequest();
  
  const container = document.querySelector('.main')
  
  xhr.onload = function () {
      if (this.status === 200) {
          container.innerHTML = xhr.responseText;
      }
      else {
          console.warn('did not response!');
      }
  }
  
  xhr.open('get', i);
  xhr.send();
}