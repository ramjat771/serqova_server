import http from "http";
import app from "./app.mjs";
import { PORT } from "./config/env.mjs";

import { mongoConnection } from './config/db.mjs';

async function startServer() {

  const server = http.createServer(app);
  server.listen(PORT, async() => {
    await mongoConnection()
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

  return { server };
}

startServer();
