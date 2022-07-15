const adviceIdEl = document.getElementById('advice-id');
const quoteEl = document.querySelector('.quote');
const diceBtnEl = document.getElementById('dice-button');

const handleErrors = response => {
  if (!response.ok) {
    const errMsg = `An error has occurred with your API request: ${response.status}`;
    throw new Error(errMsg);
  }

  return response;
}

// GET quote from Advice Slip API
const fetchAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');

  handleErrors(response);

  const advice = await response.json();
  return advice;
}

// Render advice on page load
fetchAdvice()
  .then(advice => {
    adviceIdEl.textContent = advice.slip.id;
    quoteEl.textContent = advice.slip.advice;
  });

  // Clicking the dice button generates and renders new advice
diceBtnEl.addEventListener('click', () => {
  fetchAdvice()
    .then(advice => {
      quoteEl.classList.add('fade-out');
      // fade out/in when a new quote is generated
      setTimeout(function () {
        quoteEl.classList.remove("fade-out");
        quoteEl.textContent = advice.slip.advice;
      }, 1000);

      adviceIdEl.textContent = advice.slip.id;
    });
});
