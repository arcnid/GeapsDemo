let currentRotation = 0;
let rotationSpeed = 0.07; // Degrees per step
let rotationInterval;
let state = ["stop"]; // can be one of 3 states: forward, stop, and reverse

export const getState = () => state;
export const getRotation = () => currentRotation;

/**
 *
 * @param {number} val
 */
export const setRotation = (val) => {
	currentRotation = parseInt(val);
};

/**
 *
 * @param {"forward" | "stop" | "reverse"} newState
 */
export const setState = (newState) => {
	state = newState;
};

export const stopRotation = () => {
	clearInterval(rotationInterval);
	if (getState() !== "stop") {
		setState("stop");
	}
};

export const startRotationForward = () => {
	stopRotation();
	if (getState() !== "forward") {
		setState("forward");
	}

	rotationInterval = setInterval(() => rotateLine(rotationSpeed), 50);
};

export const startRotationReverse = () => {
	stopRotation();
	if (getState() !== "reverse") {
		setState("revserse");
	}

	rotationInterval = setInterval(() => rotateLine(-rotationSpeed), 50);
};

/**
 *
 * @param {"forward" | "stop" | "reverse"} direction
 * @param {number?} curr
 */
export function rotateLine(direction, curr) {
	if (curr) {
		console.log("passed cur");
		currentRotation = (curr + direction) % 360;
	} else {
		currentRotation = (currentRotation + direction) % 360;
		line.setAttribute("transform", `rotate(${currentRotation} 50 50)`);
	}
}

export const startRotating = () => {
	if (getState() === "reverse" || getState() === "forward") {
		stopRotation();
	}

	if (document.getElementById("StartSw").checked) {
		if (document.getElementById("FwdDirSw").checked) {
			startRotationForward();
		} else {
			startRotationReverse();
		}
	} else {
		stopRotation();
	}
};
