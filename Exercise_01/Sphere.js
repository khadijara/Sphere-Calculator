let num = '';
// TODO: Checking the Area of the Sphere.
document.getElementById('area').addEventListener('click', () => {
  num = document.getElementById('radio').value;

  if (Number.isNaN(Number(num)) || num === '' || num < 0) {
    alert('Check the number that you are trying to calculate. It must be a correct number.');
  } else {
    const num1 = 4 * Math.PI * num ** 2; // Formula of the area.
    document.getElementById('result').value = `Area: ${num1}`;
  }
});
// TODO: Checking the Volume of the Sphere.

document.getElementById('volume').addEventListener('click', () => {
  num = document.getElementById('radio').value;

  if (Number.isNaN(Number(num)) || num === '' || num < 0) { // Checking the Validations functions
    alert('Check the number that you are trying to calculate. It must be a correct number.');
  } else {
    const num2 = (4 / 3) * Math.PI * num ** 3; // Formula for the volume value.
    document.getElementById('result').value = `Volume: ${num2}`;
  }
});
