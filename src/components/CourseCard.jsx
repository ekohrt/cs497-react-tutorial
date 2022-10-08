import './CourseCard.css';



const CourseCard = (props) => (
  <div className="card m-1 p-2">
    <div className="card-body">
      <h4 className="course-number">{props.course.term} CS {props.course.number}</h4>
      <h6 className="card-title">{props.course.title}</h6>
      
      <hr className='line-thing'></hr>
      <p className="card-text">{props.course.meets}</p>
    </div>
  </div>
);

export default CourseCard;