const { createServer } = require("http");
const app = require("./app");
const PORT = process.env.PORT || 3000;

const server = createServer(app);

const startServer = () => {
  try {
    server.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
};

startServer()