import dotenv from 'dotenv';
import path from 'path';
dotenv.config();
 const PORT=process.env.PORT
  const MONGO_URI=process.env.MONGO_URI
  const REDIS_URL=process.env.REDIS_URL
  const DISTANCE=process.env.DISTANCE
  const CLIENT_ID=process.env.CLIENT_ID
  const CLIENT_SECRET=process.env.CLIENT_SECRET
  const PHONEPE_AUTH_ENDPOINT=process.env.PHONEPE_AUTH_ENDPOINT
  const PHONEPE_ORDER_ENDPOINT=process.env.PHONEPE_ORDER_ENDPOINT
  const PHONE_PAY_BASE_URL=process.env.PHONE_PAY_BASE_URL
  const COMMISSION=process.env.COMMISSION
 export {PORT,MONGO_URI,REDIS_URL,DISTANCE,CLIENT_ID,CLIENT_SECRET,PHONEPE_AUTH_ENDPOINT,PHONEPE_ORDER_ENDPOINT,PHONE_PAY_BASE_URL,COMMISSION};
