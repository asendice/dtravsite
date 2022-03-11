const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
   
  },
  {
    timestamps: true,
    collection: "messages",
  }
);

module.exports = mongoose.model("Messages", messageSchema);