const btnSave = document.querySelector('.btnSave');
const input = document.querySelector('input');
const h1 = document.querySelector('h1');

btnSave.addEventListener('click', () => {
  const value = input.value;
  localStorage.setItem('data', value);
});

btnRead.addEventListener('click', () => {
  const data = localStorage.getItem('data');
  h1.innerText = data;
});