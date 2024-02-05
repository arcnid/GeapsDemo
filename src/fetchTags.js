/**
 *
 * @param {*} client
 * @returns
 */
export const fetchTags = async (client) => {
	try {
		const response = await fetch(`${baseUrl}:300/Tags`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!response.ok) {
			console.log(response);
			throw new Error("Network response was not ok");
		}

		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
	}
};
