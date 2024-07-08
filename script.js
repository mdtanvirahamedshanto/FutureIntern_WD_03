document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('temperatureInput').value;
    const selectedUnit = document.querySelector('input[name="unit"]:checked').value;
    const resultElement = document.getElementById('result');

    if (isNaN(tempInput)) {
        resultElement.textContent = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(tempInput);
    let convertedTemp;

    if (selectedUnit === 'celsius') {
        convertedTemp = `${temperature}°C = ${(temperature * 9/5 + 32).toFixed(2)}°F = ${(temperature + 273.15).toFixed(2)}K`;
    } else if (selectedUnit === 'fahrenheit') {
        convertedTemp = `${temperature}°F = ${((temperature - 32) * 5/9).toFixed(2)}°C = ${(((temperature - 32) * 5/9) + 273.15).toFixed(2)}K`;
    } else if (selectedUnit === 'kelvin') {
        convertedTemp = `${temperature}K = ${(temperature - 273.15).toFixed(2)}°C = ${((temperature - 273.15) * 9/5 + 32).toFixed(2)}°F`;
    }

    resultElement.textContent = convertedTemp;
});
