import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => new mongoose.Types.ObjectId().toString(),
    },
    title: String,
    course: {type: mongoose.Schema.Types.Mixed, ref: "CourseModel"},
    start: String,
    end: String,
    release: String,
    due: String,
    until: String,
    points: String,
    assignTo: String,
    assignDes: String,

  },
  { collection: "assignments" }
);

export default schema;
