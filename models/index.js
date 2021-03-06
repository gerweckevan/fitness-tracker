// Exporting an object containing all of our models
const port = process.env.PORT || 3005;
module.exports = {
  Workout: require("./workout"),
};
