document
  .getElementById("calculator-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const material = document.getElementById("material").value;
    const tool = document.getElementById("tool").value;
    const diameter = parseFloat(document.getElementById("diameter").value);
    const rpm = parseFloat(document.getElementById("rpm").value);
    const feedrate = parseFloat(document.getElementById("feedrate").value);

    let results = `
        <h3>Calculated Results for ${tool} in ${material}:</h3>
        <ul>
            <li>Tool Diameter: ${diameter} inches</li>
            <li>Spindle RPM: ${rpm}</li>
            <li>Feedrate: ${feedrate} inches/min</li>
        </ul>
    `;

    // Basic calculation example
    const cuttingSpeed = (rpm * Math.PI * diameter).toFixed(2);
    results += `<p>Calculated Cutting Speed: ${cuttingSpeed} inches/min</p>`;

    document.getElementById("results").innerHTML = results;
  });
