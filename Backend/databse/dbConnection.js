import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, { dbName: "MERN_STACK_EVENT_MESSAGE" })
    .then(() => {
      console.log("Connection to database");
    })
    .catch((err) => {
      console.log(err);
    });
};
