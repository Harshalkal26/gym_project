// import React,{useState} from 'react';
// import HeroBanner from '../components/HeroBanner';
// import SearchExercises from '../components/SearchExercises';
// import Exercises from '../components/Exercises';

// import {Box} from '@mui/material';

// const Home = () => {
//   const [bodyPart,setBodyPart]=useState('all');
//   const [exercises,setExercises]=useState([]);
//   return (
//     <Box>
//         <HeroBanner/>
//         <SearchExercises 
//         setExercises={setExercises}
//         bodyPart={bodyPart}
//         setBodyPart={setBodyPart}/>
//         <Exercises
//         setExercises={setExercises}
//         bodyPart={bodyPart}
//         setBodyPart={setBodyPart}
//         />
//     </Box>
//   )
// }

// export default Home;
import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;