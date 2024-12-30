

export const envs = {
    PORT: process.env.PORT || 3000,

    MONGO_URL: process.env.MONGO_URL || "mongodb://andres:123456@localhost:27018",
    MONGO_DB_NAME: process.env.MONGO_DB_NAME || "tester"
}