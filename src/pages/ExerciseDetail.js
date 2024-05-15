import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';
import { useParams } from 'react-router-dom';
import { exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData';

const ExerciseDetail = () => {

  const[exerciseDetail, setExerciseDetail] = useState();
  const[exerciseVideos, setExerciseVideos] = useState();
  const[targetMuscleExercises, setTargetMuscleExercises] = useState();
  const[equipmentExercises, setEquipmentExercises] = useState();
  const {id} = useParams();

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const exercisedbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exercisedbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData?.name}`, youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exercisedbUrl}/exercises/target/${exerciseDetailData?.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(`${exercisedbUrl}/exercises/equipment/${exerciseDetailData?.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    }

    fetchExercisesData();
  }, [id]);

  // console.log(targetMuscleExercises);

  return (
    <Box>
      {exerciseDetail && <Detail exerciseDetail={exerciseDetail} />}
      <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail?.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>  
  )
}

export default ExerciseDetail;