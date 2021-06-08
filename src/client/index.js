import { handleSubmit } from './js/pageHandler';
import { validateURL } from './js/URLUtils';
import './styles/base.scss';
import './styles/footer.scss';
import './styles/form.scss';
import './styles/header.scss';
import './styles/resets.scss';

export { handleSubmit, validateURL };

window.addEventListener('DOMContentLoaded', (e) => {
  // get reference to the form elemet
  const form = document.getElementById('form');
  // Add submit event listener on this form
  form.addEventListener('submit', handleSubmit);
});