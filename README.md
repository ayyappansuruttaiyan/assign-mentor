The app is running on Localhost:3000
Entry point api : https://assign-mentor-0xva.onrender.com/

List of all available end points:

1. List all available students - '/'
2. List all available mentors - "/api/mentors"
3. create Mentor - "api/mentors"
4. create Student - "api/students"
5. Assign a student to Mentor - "/api/assign-mentor/:mentorId/:studentId"
6. show all students for a particular mentor - "/api/mentor-students/:mentorId"
7. Assign or Change Mentor for particular Student - "/api/assign-mentor/:studentId/:newMentorId"
8. show the previously assigned mentor for a particular student - "/api/previous-mentor/:studentId"
