import CourseCard from './CourseCard.jsx';
import './CardGrid.css'

const CardGrid = (props) => (
    
    <div className = 'card-grid'>
        { Object.entries(props.courses).map(
            ([course_id, data], idx) => <CourseCard key={course_id} course={data} />
        ) }
    </div>
  );
  
  export default CardGrid;