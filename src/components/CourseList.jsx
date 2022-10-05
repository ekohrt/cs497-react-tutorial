const CourseList = (courses_object) => (
  <div>
    <ul>
        { Object.entries(courses_object).map(([course_id, data], idx) => <li key={course_id}> {data.term} CS {data.number}: {data.title} </li>) }
    </ul>
  </div>
);

export default CourseList;