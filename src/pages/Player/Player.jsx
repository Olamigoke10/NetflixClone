import React, { useContext, useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'




const Player = () => {

  const {id} = useParams();
  const navigation = useNavigate()

    
  
    const handleGoback = ()=> {
      
      navigation('/')
    }

  const [apiData, setApiData] = useState({
    name : "",
    key : "",
    published_at: "",
    type : ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4YTg0OGRmYmE2ZjlmZjYzZDliZDA4Y2EyZGJmNTY1YiIsIm5iZiI6MTc0MTc4OTI3My4xMDcsInN1YiI6IjY3ZDE5ODU5MjdjMzk2MGMyZDFlMjJiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uyueZVTCMKgEbTTw3WjKCaUupxIlCs8B-kThUdrDQRY'
    }
  };
  
  useEffect(()=> {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={handleGoback}/>
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width="90%" height="90%" title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
