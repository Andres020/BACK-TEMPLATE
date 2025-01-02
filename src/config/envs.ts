process.loadEnvFile();

// TODO: Add validation for the environment variables
const {
  PORT = 400,
  MONGO_URL = "mongodb://andres:123456@localhost:27018",
  MONGO_DB_NAME = "tester",
  JWT_SECRET = "secret",
} = process.env;

export const envs = {
  PORT,
  MONGO_URL,
  MONGO_DB_NAME,
  JWT_SECRET,
};
