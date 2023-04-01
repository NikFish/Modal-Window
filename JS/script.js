'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal-window');
const buttonsBox = document.querySelector('.buttons-box');
const modalWindowTitle = document.querySelector('.modal-window-title');

const closeModal = function () {
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function (event) {
  if (event.target.classList.contains('show-modal-window')) {
    const title = event.target.textContent;

    modalWindowTitle.textContent = title;
    modalWindow.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }
};

buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

buttonsBox.addEventListener('click', function (event) {
  openModal(event);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden'))
    closeModal();
});
