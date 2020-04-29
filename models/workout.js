const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },

  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required",
      },

      name: {
        type: String,
        trim: true,
        required: "Name is required",
      },

      duration: {
        type: Number,
        required: "Number is required",
      },

      weight: {
        type: Number,
        required: "Weight is required",
      },

      reps: {
        type: Number,
        required: "Reps is required",
      },

      sets: {
        type: Number,
        required: "Sets is required",
      },
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
