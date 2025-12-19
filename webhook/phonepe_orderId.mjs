import { PHONEPE_ORDER_ENDPOINT } from "../config/env.mjs";
import { getAccessTokenController } from "./phonepay_auth.mjs";
import { callPhonePeApi } from "./phonepe_api.mjs";

/**
 * Controller function to create an order on PhonePe
 */
export const createOrderController =async ({amount,email,phone}) =>{
   const mapData= await getAccessTokenController()
   const accessToken=mapData["access_token"]
   console.log(`amra's token ${accessToken}`)

  const headers = {
    "Authorization": `O-Bearer ${accessToken}`
  };

  const body = {
    amount: amount,
    expireAfter: 1200,
    metaInfo: {
      udf1: `${email}${phone}`,
      udf2: "test",
      udf3: "test",
      udf4: "test",
      udf5: "test",
      udf6: "test",
      udf7: "test",
      udf8: "test",
      udf9: "test",
      udf10: "test",
      udf11: "test",
      udf12: "test",
      udf13: "test",
      udf14: "test",
      udf15: "test"
    },
    paymentFlow: {
      type: "PG_CHECKOUT"
    },
    merchantOrderId: `TX` + Date.now() // ✅ auto-generate unique ID
  };

  try {
    // ✅ /checkout/v2/sdk/order needs JSON body
    const response = await callPhonePeApi(
      PHONEPE_ORDER_ENDPOINT,
      body,
      headers,
      "POST",
      true,

    );

    console.log("✅ Order Created Successfully:", response);
    return response;
  } catch (err) {
    console.error("❌ Controller Error - Failed to create order:", err.response?.data || err.message);
    throw err;
  }
}
