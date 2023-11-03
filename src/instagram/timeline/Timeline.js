import React, { useState } from 'react'
import "./Timeline.css";
import Sugessions from './Sugessions';
import Post from './posts/Post';


export default function Timeline() {
  const INITIAL_ARRAY = [
    {
      user: "JoelFoubia",
      postImage: "./image/Foubia.jpg",
      likes : 12,
      timestamp : "2d"
    },
    {
      user: "NgassaCarole",
      postImage: "./image/MamaMessi.jpg",
      likes : 32,
      timestamp : "1d"
    },
    {
      user: "MessiFoubia",
      postImage: "./image/Messi.jpg",
      likes : "9k",
      timestamp : "2h"
    },
    {
      user: "Foubs",
      postImage: "./image/Foubs.jpg",
      likes : "19k",
      timestamp : "2h"
    },
    {
      user: "Lili",
      postImage: "./image/Lili.jpg",
      likes : "80k",
      timestamp : "2h"
    },
    {
      user: "Luna",
      postImage: "./image/Luna.jpg",
      likes : "96k",
      timestamp : "2h"
    },
    {
      user: "Papa Ntopi",
      postImage: "./image/PapaTobi.jpg",
      likes : 262,
      timestamp : "2h"
    }
  ]
  const [post, setPost] = useState(INITIAL_ARRAY);
  return (
    <div className='timeline'>
      <div className='timeline__left'>
        <div className='timeline__posts'> 
        {
          post.map((post, index)=> <Post post={post} key={index}/>)
        }
        </div>
      </div>
      <div className='timeline__right'>
        <Sugessions/>
      </div>
    </div>
  )
}

