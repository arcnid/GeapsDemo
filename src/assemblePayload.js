import { getCurrentState } from "./getCurrentState.js";

/**
 *  This function takes in an incoming JSON Payload and returns an output Payload with values from the DOM
 *
 * @param {JSON} input
 */

export const assemblePayload = (input) => {
	const state = getCurrentState();
	console.log(input);
	const map = {
		ActualFlowRate: { key: "ActualFlowRate", extractor: (elem) => elem.value },
		StartSw: { key: "StartSw", extractor: (elem) => (elem.checked ? 1 : 0) },
	};

	const output = input.Data.map(({ Name, TagValue, DataType }) => {
		if (Name == "ActualFlowRate") {
			return { Name, TagValue: state.ActualFlowRate.value, DataType };
		} else if (Name == "SatrtSw") {
			return { Name, TagValue: state.StartSw.value, DataType };
		}
	});

	const returnObj = {
		DeviceId: "Machine1",
		TimeStamp: `${new Date(Date.now()).toLocaleDateString()} ${new Date(
			Date.now()
		).toLocaleTimeString()}`,
		Data: output,
	};

	return returnObj;
};
