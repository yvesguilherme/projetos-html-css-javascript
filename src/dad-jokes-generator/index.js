'use strict';

const jokeElement = document.getElementById('joke');
const get_joke = document.getElementById('get_joke');

get_joke.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
  const jokeResult = await fetch('https://icanhazdadjoke.com', {
    headers: {
      'Accept': 'application/json'
    }
  });

  const { joke } = await jokeResult.json();

  console.log(joke);

  jokeElement.innerHTML = joke;
}