import axios from "axios";
import { PHONE_PAY_BASE_URL } from "../config/env.mjs";

let BASE_URL = PHONE_PAY_BASE_URL;

/**
 * Universal PhonePe API caller
 * Works for both v1 and v2 endpoints
 */
export const callPhonePeApi = async (
  endpoint,
  body = {},
  headers = {},
  method = "POST",
  isJson = false,base_url
) => {

  // if(base_url){
  //   BASE_URL=base_url
  // }

  const defaultHeaders = {
    "Content-Type": isJson
      ? "application/json"
      : "application/x-www-form-urlencoded",
    ...headers,
  };

  let requestBody;
  if (isJson) {
    requestBody = body; // send as JSON
  } else {
    const { URLSearchParams } = await import("url");
    requestBody = new URLSearchParams(body).toString(); // form-data
  }

  try {
    const response = await axios({
      url: `${BASE_URL}${endpoint}`,
      method,
      headers: defaultHeaders,
      data: requestBody,
    });
    return response.data;
  } catch (error) {
    console.error("❌ PhonePe API Error:", error.response?.data || error.message);
    throw error;
  }
};
