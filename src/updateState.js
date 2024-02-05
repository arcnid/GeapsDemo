import { updateNeedle } from "./index.js";
import { updateSliderValue } from "./guage.js";
import { assemblePayload } from "./assemblePayload.js";
import { getCurrentState } from "./getCurrentState.js";
import { setState, setRotation } from "./rotation.js";

/**
 * This function will update the Global state of the entire page.
 * Executes once for every incoming message
 * @param {Array<Object>} incoming
 */
export const updateState = (incoming) => {
	//map all elements in the page
	const state = getCurrentState();

	state.ActualFlowRate.value = incoming.Data[0].TagValue;
	state.targetFlowRate.value = 360;
	state.rotation.value = incoming.Data[8].TagValue;
	setRotation(incoming.Data[8].TagValue);

	// state.rotation.focus();
	if (incoming.Data[2].TagValue === 1) {
		state.FwdDirSw.setAttribute("checked", true);
	} else {
		state.FwdDirSw.removeAttribute("checked", true);
	}
	if (incoming.Data[1].TagValue === 1) {
		state.StartSw.setAttribute("checked", true);
	} else {
		state.StartSw.removeAttribute("checked", true);
	}

	state.SweepMotorLoad.value = "6";
	state.SweepMotorLoad.focus();

	//We need to manually trigger the input event on each slider to update the gauges
	state.sweepSlider.value = 0.6;
	state.sweepSlider.dispatchEvent(new Event("input", { bubbles: true }));

	state.tracSlider.value = 0.6;
	state.tracSlider.dispatchEvent(new Event("input", { bubbles: true }));

	state.StartSw.dispatchEvent(new Event("change", { bubbles: true }));

	//set focus on top, then remove focus
	// state.targetFlowRate.focus();
	// document.activeElement.blur();

	//after setting all the values on the page we want to send a response back to the HMI

	assemblePayload(incoming);
};
