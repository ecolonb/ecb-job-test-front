import env from "../environments.json";

export async function getAllCars() {
  let responseJson = undefined;
  const endPoint = env.server + env.getAllCars;
  try {
    const response = await window.fetch(endPoint, {
      method: "GET",
    });
    responseJson = await response.json();
  } catch (err) {
    responseJson = {
      ok: false,
    };
  }
  return responseJson;
}

export async function maintenanceRequest(requestData) {
  let responseJson = undefined;
  const endPoint = env.server + env.maintenance;
  const headers = { "Content-Type": "application/json" };
  try {
    const response = await window.fetch(endPoint, {
      method: "PUT",
      headers: headers,
      body: JSON.stringify(requestData),
    });
    responseJson = await response.json();
  } catch (error) {
    responseJson = {
      data: {
        error: true,
      },
    };
  }
  return responseJson;
}
