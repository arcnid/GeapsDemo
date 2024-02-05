import { updateState } from "./updateState.js";

/**
 *	This function makes use of the Paho-MQTT.js Library to make a websocket connection to the MQTT Server
	We may need to swap this out in the future as this library may not support WSS secure protocol
 * @param {string} connString
 */
export const createClient = async () => {
	const connString = "wss://wc9ed161.emqx.cloud/mqtt";
	const client = new Paho.MQTT.Client(connString, "myClientId");
	const pubTopic = "toHMI";
	const subTopic = "toWeb";

	client.connect({
		userName: "username",
		password: "password",
		onSuccess: async () => {
			await client.subscribe(subTopic, {
				onSuccess: async () => {
					console.log(`subscribing on topic: ${subTopic}`);
				},
			});
			client.onMessageArrived = async (incoming) => {
				const msg = JSON.parse(incoming.payloadString);
				updateState(msg);
			};
		},
		onFailure: async (param) => {
			console.log("Failed to conncet");
			console.log(param);
		},
	});
};
