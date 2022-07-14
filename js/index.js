const adviceIdEl = document.getElementById('advice-id');
const quoteEl = document.getElementById('quote');

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

fetchAdvice()
  .then(advice => {
    adviceIdEl.textContent = advice.slip.id;
    quoteEl.textContent = advice.slip.advice;
  });
