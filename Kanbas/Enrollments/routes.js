import * as enrollmentsDao from "../Modules/dao.js";

export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.findAllEnrollments();
        res.send(enrollments);
      });

      app.post("/api/enrollments/enroll/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        const status = await enrollmentsDao.enrollUserInCourse(currentUser._id, courseId);
        res.send(status);
      });

      app.post("/api/enrollments/unenroll/:courseId", async (req, res) => {
        const { courseId } = req.params;
        const currentUser = req.session["currentUser"];
        const status = await enrollmentsDao.unenrollUserInCourse(currentUser._id, courseId);
        res.send(status);
      });



}