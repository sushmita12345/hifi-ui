const openModal = document.querySelector('#modal');
const openBtn = document.querySelector('.open-modal-btn');
const closeBtn = document.querySelector('.modal-close-btn');

openBtn.addEventListener('click', () => {

  openModal.style.display = 'flex';
  
});

closeBtn.addEventListener('click', () => {
  openModal.style.display = 'none';
});

// window.onclick = function(e) {
//     if (e.target === openModal) {
//         openModal.style.display = 'none';
//     }
// }
