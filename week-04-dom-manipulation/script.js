
// When this function is called, it takes the values from the inputs and adds
// them to the outputs.

function fillOutputs() {

  const yournameInput = document.getElementById('your-name-input');
  const yourname = yournameInput.value;
  const yournameOutput = document.getElementById('your-name-output');
  yournameOutput.innerText = yourname;

  const foodoneInput = document.getElementById('food-one-input');
  const foodone = foodoneInput.value;
  const foodoneOutput = document.getElementById('food-one-output');
  foodoneOutput.innerText = foodone;

  const foodtwoInput = document.getElementById('food-two-input');
  const foodtwo = foodtwoInput.value;
  const foodtwoOutput = document.getElementById('food-two-output');
  foodtwoOutput.innerText = foodtwo;

  const foodthreeInput = document.getElementById('food-three-input');
  const foodthree = foodthreeInput.value;
  const foodthreeOutput = document.getElementById('food-three-output');
  foodthreeOutput.innerText = foodthree;

  const adjectivetwoInput = document.getElementById('adjective-two-input');
  const adjectivetwo = adjectivetwoInput.value;
  const adjectivetwoOutput = document.getElementById('adjective-two-output');
  adjectivetwoOutput.innerText = adjectivetwo;

  const adjectivethreeInput = document.getElementById('adjective-three-input');
  const adjectivethree = adjectivethreeInput.value;
  const adjectivethreeOutput = document.getElementById('adjective-three-output');
  adjectivethreeOutput.innerText = adjectivethree;

  const outputDiv = document.getElementById('output');
  outputDiv.style.display = 'block';

}