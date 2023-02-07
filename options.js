// Get references to form elements
const form = document.querySelector('form');
const genderInput = document.querySelector('#gender');
const ageInput = document.querySelector('#age');
const voiceToneInput = document.querySelector('#voiceTone');
const storyTellingInput = document.querySelector('#storyTelling');
const themeInput = document.querySelector('#theme');

// Handle form submission
form.addEventListener('submit', event => {
  event.preventDefault();

  const gender = genderInput.value;
  const age = ageInput.value;
  const voiceTone = voiceToneInput.value;
  const storyTelling = storyTellingInput.value;
  const theme = themeInput.value;

  // Use the selected values to generate the avatar and story
  // ...

  // Show the generated story
  // ...
});
