require("dotenv").config();

const connectDB = require("./db/connect");
const Framework = require("./models/framework");

const jsonFrameworks = require("./frameworks.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Framework.deleteMany();
    await Framework.create(jsonFrameworks);
    console.log("success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
