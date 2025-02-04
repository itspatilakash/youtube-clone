import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import {useAppDispatch,useAppSelector} from "../hooks/useApp"

export default function Home(){

   const dispatch = useAppDispatch();
   const videos = useAppSelector((state) => state.youtubeApp.videos);

   useEffect(()=>{
    dispatch(getHomePageVideos(false));
   },[dispatch])
   

  return (
    <div>
      <Navbar/>
      <Sidebar/>
    </div>
  )
}

