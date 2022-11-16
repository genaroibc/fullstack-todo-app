const { Schema, model, models } = require("mongoose");

const userSchema = new Schema({
  username: {
    required: true,
    type: String
  },
  tasks: {
    required: false,
    default: [],
    type: Array
  }
});

export const UserModel = models.User || model("User", userSchema);
