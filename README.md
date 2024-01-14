The app is running on Localhost:3000
Entry point api : https://assign-mentor-0xva.onrender.com/

List of all available end points:

List all available students - '/'
List all available mentors - "/api/mentors"
create Mentor - "api/mentors"
create Student - "api/students"
Assign a student to Mentor - "/api/assign-mentor/:mentorId/:studentId"
show all students for a particular mentor - "/api/mentor-students/:mentorId"
Assign or Change Mentor for particular Student - "/api/assign-mentor/:studentId/:newMentorId"
show the previously assigned mentor for a particular student - "/api/previous-mentor/:studentId"
