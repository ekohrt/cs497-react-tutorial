import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseList from './components/CourseList.jsx';
import Banner from './components/Banner.jsx';
import CourseCard from './components/CourseCard.jsx';
import CardGrid from './components/CardGrid.jsx';
import './components/CardGrid.css';
import './components/CourseCard.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useJsonQuery } from './utilities/fetch';

import 'bootstrap/dist/css/bootstrap.min.css';



// const schedule = {
//   "title": "CS Courses for 2018-2019",
//   "courses": {
//     "F101" : {
//       "term": "Fall",
//       "number": "101",
//       "meets" : "MWF 11:00-11:50",
//       "title" : "Computer Science: Concepts, Philosophy, and Connections"
//     },
//     "F110" : {
//       "term": "Fall",
//       "number": "110",
//       "meets" : "MWF 10:00-10:50",
//       "title" : "Intro Programming for non-majors"
//     },
//     "S313" : {
//       "term": "Spring",
//       "number": "313",
//       "meets" : "TuTh 15:30-16:50",
//       "title" : "Tangible Interaction Design and Learning"
//     },
//     "S314" : {
//       "term": "Spring",
//       "number": "314",
//       "meets" : "TuTh 9:30-10:50",
//       "title" : "Tech & Human Interaction"
//     }
//   }
// };

const Schedule = (props) => {
  const [data, isLoading, error] = useJsonQuery(props.url_source);
  const schedule = data

  if (error) return <h1>Error loading schedule data: {`${error}`}</h1>;
  if (isLoading) return <h1>Loading schedule data...</h1>;
  if (!data) return <h1>No schedule data found</h1>;

  return (
    <div>
      <Banner title={schedule.title}/>
      <CardGrid courses={schedule['courses']} />
    </div>
  )
}

const queryClient = new QueryClient()
const url = 'https://courses.cs.northwestern.edu/394/guides/data/cs-courses.php';

const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
      <Schedule url_source={url}></Schedule>
      </div>
    </QueryClientProvider>
  );
};

export default App;
