/**
 * This funtion returns an object of the current DOM state
 *
 * @returns
 */

export const getCurrentState = () => {
	return {
		targetFlowRate: document.getElementById("target-flow-rate"),
		ActualFlowRate: document.getElementById("actual-flow-rate"),
		rotation: document.getElementById("rotation-angle"),
		StartSw: document.getElementById("StartSw"),
		FwdDirSw: document.getElementById("FwdDirSw"),
		SweepMotorLoad: document.getElementById("sweep-motor-load"),
		SweepMotorSpeed: document.getElementById("sweep-speed"),
		TracMotorSpeed: document.getElementById("tractor-motor-load"),
		TracMotorLoad: document.getElementById("tractor-motor-load"),
		tracSlider: document.getElementById("needle-slider-tractor"),
		sweepSlider: document.getElementById("needleSlider"),
	};
};
