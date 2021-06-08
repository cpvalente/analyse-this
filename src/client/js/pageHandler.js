import { validateURL } from './URLUtils.js';

function updateContent(data) {
  // Populate results
  document.getElementById('agreement').innerHTML = data.agreement.toLowerCase();
  document.getElementById('subjectivity').innerHTML =
    data.subjectivity.toLowerCase();
  document.getElementById('confidence').innerHTML =
    data.confidence.toLowerCase();
  document.getElementById('irony').innerHTML = data.irony.toLowerCase();

  // Show Section
  document.getElementById('results').classList.remove('hidden');
}

async function handleSubmit(event) {
  event.preventDefault();

  // get URL from input field
  const formText = document.getElementById('url').value;

  // validate url with regex
  // checkForName(formText);
  const isValid = validateURL(formText);

  if (!isValid) {
    alert('URL Entered invalid');
    return;
  }

  fetch('http://localhost:8081/analyseURL', {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url: formText }),
  })
    .then((res) => res.json())
    .then((parsed) => updateContent(parsed))
    .catch((error) => console.log(error));
}

export { updateContent, handleSubmit };
