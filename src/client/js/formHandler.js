import { validateURL } from './URLUtils.js';

async function handleSubmit(event) {
  event.preventDefault();

  // get URL from input field
  const formText = document.getElementById('url').value;
  console.log('1. Received', formText);

  // validate url with regex
  // checkForName(formText);
  const isValid = validateURL(formText);
  console.log('2. Validate', isValid);

  if (!isValid) {
    alert('URL Entered invalid');
    return;
  }

  console.log('3. Submitting', formText);

  fetch('http://localhost:8081/analyseURL', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: formText }),
  })
    .then((res) => res.json())
    .then((parsed) => {
      console.log('4. Posting Results', parsed);
      document.getElementById('resultsTitle').classList.remove('hidden');
      document.getElementById('results').innerHTML = parsed;
    });
}

export { handleSubmit };
