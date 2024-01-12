import mongoose from "mongoose";

const configOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connectToDB = async () => {
  const connectionUrl = "mongodb+srv://aymensaidany:2wWhn5WWDr7rUdp9@cluster0.vdat2iz.mongodb.net/";

  try {
    await mongoose.connect(connectionUrl, configOptions);
    console.log("Frishop database connected successfully!");
  } catch (err) {
    console.error(`Getting Error from DB connection ${err.message}`);
  }
};

export default connectToDB;
