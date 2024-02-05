// Get the SVG element, slider, and slider value element
var svg = document.getElementById("needleGauge");
var slider = document.getElementById("needleSlider");
var sliderValueElement = document.getElementById("sliderValue");

// Function to draw the needle and numbers
const drawNeedle = (value) => {
	// Clear existing content
	svg.innerHTML = "";

	// Draw the full circle
	const circle = document.createElementNS(
		"http://www.w3.org/2000/svg",
		"circle"
	);
	circle.setAttribute("cx", "150");
	circle.setAttribute("cy", "180");
	circle.setAttribute("r", "85"); // Adjusted radius
	circle.setAttribute("fill", "#eee");
	circle.setAttribute("stroke", "#333");
	circle.setAttribute("stroke-width", "2");
	// Apply rotation to the circle
	circle.setAttribute("transform", "rotate(-90 150 180)");
	svg.appendChild(circle);

	// Draw numbers
	for (var i = 1; i <= 10; i++) {
		const angle = (i / 10) * Math.PI + (3 / 2) * Math.PI;
		const x = 150 + Math.cos(angle) * 95; // Adjusted radius for numbers
		const y = 180 + Math.sin(angle) * 95;

		const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
		text.setAttribute("x", x.toString());
		text.setAttribute("y", y.toString());
		text.setAttribute("text-anchor", "middle");
		text.setAttribute("alignment-baseline", "middle");
		text.setAttribute("style", "font-family: sans-serif");
		text.textContent = i.toString();
		// Apply rotation to the numbers
		text.setAttribute("transform", "rotate(-90 150 180)");
		svg.appendChild(text);
	}

	// Map slider position to angle between 3pm and 9pm
	var needleAngle = value * Math.PI + (3 / 2) * Math.PI;
	var handLength = 80; // Adjusted hand length to stay within bounds of the

	var x = 150 + Math.cos(needleAngle) * handLength;
	var y = 180 + Math.sin(needleAngle) * handLength;

	// Draw the needle
	var needle = document.createElementNS("http://www.w3.org/2000/svg", "line");
	needle.setAttribute("x1", "150");
	needle.setAttribute("y1", "180");
	needle.setAttribute("x2", x.toString());
	needle.setAttribute("y2", y.toString());
	needle.setAttribute("stroke", "#6eb3ee");
	needle.setAttribute("stroke-width", "3");
	// Apply rotation to the needle
	needle.setAttribute("transform", "rotate(-90 150 180)");
	svg.appendChild(needle);

	// Update slider value display
	sliderValueElement.textContent = value.toFixed(2);
};

// Event listener for slider change
slider.addEventListener("input", function () {
	var sliderValue = parseFloat(slider.value);
	drawNeedle(sliderValue);
});

slider.onchange = () => {};

// Initial drawing with default slider value
drawNeedle(parseFloat(slider.value));

export const updateSliderValue = (value) => {
	slider.value = value;
};
