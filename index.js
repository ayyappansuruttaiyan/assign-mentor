const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// data
const students = [
  {
    id: 1,
    name: "Ayyappan",
    course: "FSD",
    mentor: "Vishnu",
    isMentorAssigned: true,
  },
];

const mentors = [
  {
    id: 1,
    name: "Vishnu",
    coursesHandle: ["node", "express", "html", "css"],
    students: ["Ayyappan"],
  },
];

// api end points
// List all students
app.get("/api/students", (req, res) => {
  res.send(students);
});

// List all mentors
app.get("/api/mentors", (req, res) => {
  res.send(mentors);
});

// API to get all available students
app.get("api/students", (req, res) => {
  res.status(200).send(students);
});

// API to create Mentor
app.post("api/mentors", (req, res) => {
  const mentor = req.body;
  mentors.push(mentor);
  res.json({ success: true, mentor });
});

// API to create Student
app.post("api/students", (req, res) => {
  const student = req.body;
  students.push(student);
  res.json({ success: true, student });
});

// API to Assign a student to Mentor
app.post("api/assign-mentor/:mentorId/:studentId", (req, res) => {
  const { mentorId, studentId } = req.params;
  const mentor = mentors.find((m) => m.id === mentorId);
  const student = students.find((s) => s.id === studentId);

  if (!mentor || !student) {
    res
      .status(404)
      .json({ success: false, message: "Mentor or student not found" });
  } else {
    student.mentor = mentor;
    res.json({
      success: true,
      message: "Student assigned to mentor successfully",
    });
  }
});

// API to show all students for a particular mentor
app.get("api/mentor-students/:mentorId", (req, res) => {
  const { mentorId } = req.params;
  const mentorStudents = students.filter(
    (s) => s.mentor && s.mentor.id === mentorId
  );
  res.json({ success: true, students: mentorStudents });
});

// API to Assign or Change Mentor for particular Student
app.put("api/assign-mentor/:studentId/:newMentorId", (req, res) => {
  const { studentId, newMentorId } = req.params;
  const student = students.find((s) => s.id === studentId);
  const newMentor = mentors.find((m) => m.id === newMentorId);

  if (!student || !newMentor) {
    res
      .status(404)
      .json({ success: false, message: "Student or new mentor not found" });
  } else {
    student.mentor = newMentor;
    res.json({
      success: true,
      message: "Mentor assigned to student successfully",
    });
  }
});

// API to show the previously assigned mentor for a particular student
app.get("api/previous-mentor/:studentId", (req, res) => {
  const { studentId } = req.params;
  const student = students.find((s) => s.id === studentId);

  if (!student || !student.mentor) {
    res.status(404).json({
      success: false,
      message: "Student or previous mentor not found",
    });
  } else {
    res.json({ success: true, previousMentor: student.mentor });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
