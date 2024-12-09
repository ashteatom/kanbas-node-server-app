import model from "./model.js";

export async function updateAssignment(assignmentId, assignmentUpdates) {
  return model.updateOne({ _id: assignmentId }, { $set: assignmentUpdates });
  }
  
export async function deleteAssignment(assignmentId) {
  return model.deleteOne({ _id: assignmentId });
  }
  
export async function createAssignment(assignment) {
    delete assignment._id;
    return model.create(assignment);
  }
    
export async function findAssignmentsForCourse(courseId) {
  return model.find({ course: courseId });
}
  