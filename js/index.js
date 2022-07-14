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
    console.log(advice.slip);
  });
