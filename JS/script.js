'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');
const addHiddenClass = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};
const showModalWindow = function () {
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', showModalWindow);
}
btnCloseModal.addEventListener('click', addHiddenClass);
overlay.addEventListener('click', addHiddenClass);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden'))
    addHiddenClass();
});
