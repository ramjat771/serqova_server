 import { CLIENT_ID, CLIENT_SECRET, PHONEPE_AUTH_ENDPOINT } from "../config/env.mjs";
import { callPhonePeApi } from "./phonepe_api.mjs";


/**
 * Controller function to get access token
 */
export async function getAccessTokenController() {
  const requestBody = {
    client_version: 1,
    grant_type: "client_credentials",
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET
  };

  try {
    // ✅ Use isJson = true since /oauth/token requires JSON body
    const tokenData = await callPhonePeApi(PHONEPE_AUTH_ENDPOINT, requestBody, {
        "Content-Type": "application/x-www-form-urlencoded" // ✅ correct type
      }, "POST", true,
      
    );
    console.log("✅ Access Token Generated:", tokenData);
    return tokenData;
  } catch (err) {
    console.error("❌ Controller Error - Failed to get token:", err.response?.data || err.message);
    throw err;
  }
}
