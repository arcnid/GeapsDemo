/**
 *
 * @param {string} baseUrl
 * @param {Object} data
 * @returns
 */
export const setTags = async (baseUrl, data) => {
	try {
		const response = await fetch(`${baseUrl}:300/TagBatch`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			data,
		});
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}

		return await response.json();
	} catch (e) {}
};
