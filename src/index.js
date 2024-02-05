import { assemblePayload } from "./assemblePayload.js";
import { onLoad } from "./load.js";
import { createClient } from "./mqtt.js";
import {
	getState,
	startRotating,
	startRotationForward,
	startRotationReverse,
	stopRotation,
} from "./rotation.js";

const line = document.getElementById("line");
const StartSw = document.getElementById("StartSw");
const FwdDirSw = document.getElementById("FwdDirSw");
const stopButton = document.getElementById("full-stop");
const sweepSlider = document.getElementById("needleSlider");
const tractorSlider = document.getElementById("needle-slider-tractor");

sweepSlider.value = 0.4;
tractorSlider.value = 0.4;

/**
 *
 * @param {Element} elem
 */
export const updateNeedle = (elem, value) => {
	const newVal = parseFloat(value / 10);

	sweepSlider.value = newVal;
};

window.addEventListener("load", async () => {
	//set initial location of sweep

	//on load we need to populate the dashabord with the current information of the HMI
	await onLoad();

	const json = {
		DeviceId: "Machine1",
		TimeStamp: "2/2/2024 1:42:10 PM",
		Data: [
			{ Name: "ActualFlowRate", TagValue: 0, DataType: "DT_INTEGER2" },
			{ Name: "StartSw", TagValue: 1, DataType: "DT_BIT" },
			{ Name: "FwdDirSw", TagValue: 1, DataType: "DT_BIT" },
			{ Name: "SweepMotorSpeed", TagValue: 20, DataType: "DT_INTEGER2" },
			{ Name: "SweepMotorLoad", TagValue: 10, DataType: "DT_INTEGER2" },
			{ Name: "TargetFlowRate", TagValue: 10, DataType: "DT_INTEGER2" },
			{ Name: "TracMotorSpeed", TagValue: 10, DataType: "DT_INTEGER2" },
			{ Name: "TracMotorLoad", TagValue: 10, DataType: "DT_INTEGER2" },
			{ Name: "Rotation", TagValue: 300, DataType: "DT_INTEGER2" },
		],
	};
	assemblePayload(json);
});

StartSw.addEventListener("change", () => {
	startRotating();
});
FwdDirSw.addEventListener("change", () => {
	startRotating();
});
