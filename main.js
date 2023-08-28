import './style.css';
import nalaImg from './img/nala2.jpeg';

(() => {
  const nala = document.querySelector('#nala');
  if (!nala) {
    return;
  }

  nala.addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = nalaImg;
    img.style.height = '100%';
    img.style.position = 'fixed';
    img.style.top = 0;
    img.style.left = 0;

    document.body.appendChild(img);

    setTimeout(() => {
      document.body.removeChild(img);
    }, 2000);
  });
})();
