import { createClient } from "./mqtt.js";

export const onLoad = async () => {
	//on load we want to populate each value in the dashboard
	const mqttClient = createClient();
};
