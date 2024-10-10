let temperature = document.getElementById('temperature');
let unit = document.getElementById('unit');
let convertBtn = document.getElementById('convert-btn');
let result = document.getElementById('result');

convertBtn.addEventListener('click', function() {
    let tempValue = parseFloat(temperature.value);
    let unitValue = unit.value;
    
    if (isNaN(tempValue)) {
        result.textContent = 'Please enter a valid temperature';
        return;
    }
    
    if (unitValue === 'celsius') {
        let fahrenheit = (tempValue * 9 / 5) + 32;
        result.textContent = `${tempValue}°C = ${fahrenheit.toFixed(2)}°F`;
    } else if (unitValue === 'fahrenheit') {
        let celsius = (tempValue - 32) * 5 / 9;
        result.textContent = `${tempValue}°F = ${celsius.toFixed(2)}°C`;
    }
});