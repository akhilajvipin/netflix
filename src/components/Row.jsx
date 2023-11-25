

import React, { useEffect, useState } from 'react'
import instance from '../instance';
import'./Row.css';

function Row({title,fetchURL,isPoster}) {
    // console.log(fetchURL);
    const [allmovies,setAllMovies]=useState()
    const base_url ="https://image.tmdb.org/t/p/original"

 const  fetchData = async ()=>{
      const {data} = await instance.get(fetchURL)
        // console.log(data.results);
        setAllMovies(data.results)
 }
//  console.log(allmovies);
 useEffect(()=>{
  fetchData()
 },[])


  return (
    <div>
    <h1>{title}</h1>
    <div className='movie-row'>
      {
      allmovies?.map(item=>(
        <img className={`movies ${isPoster && 'movie-poster'} `} src={`${base_url}/${isPoster?item?.poster_path: item?.backdrop_path}`}></img>
      ))
      }
    </div>
    </div>

  )
}

export default Row