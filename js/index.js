const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginPopup = document.querySelector('.login-popup');
const iconClose = document.querySelector('.icon-close');
const registerPopup = document.querySelector('.signin-popup');

registerLink.addEventListener('click', () => {
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

 loginPopup.addEventListener('click', () => {
   wrapper.classList.add('active-popup');
 });
 loginPopup.addEventListener('click', () => {
  wrapper.classList.remove('active');
});

 iconClose.addEventListener('click', () => {
  wrapper.classList.remove('active-popup');
});

registerPopup.addEventListener('click', () => {
  wrapper.classList.add('active-popup');
});

registerPopup.addEventListener('click', () => {
  wrapper.classList.add('active');
});


