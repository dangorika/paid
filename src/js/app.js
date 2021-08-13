import isTouchDevice from './lib/detectTouch';

if (isTouchDevice) {
  document.body.classList.add('no-touch');
};
