import React from 'react'
import './Post.css';
import { Avatar } from '@mui/material'
import  MoreHorizIcon  from '@mui/icons-material/MoreHoriz'
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline"
import TelegramIcon from "@mui/icons-material/Telegram"
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder"

export default function Post({post}) {
  return (
    <div className='post'>
      <div className='post__header'>
        <div className='post__headerAuthor'>
        <Avatar>{post.user.charAt(0).toUpperCase()}</Avatar>
        &nbsp; {post.user} . &nbsp; <span>{post.timestamp}</span>
        </div>
        <MoreHorizIcon/>
      </div>
      <div className='post__image'>
        <img src={post.postImage} alt='images'/>
      </div>
      <div className='post__footer'>
        <div className='post__footerIcons'>
            <div className='post__iconMain'>
                <FavoriteBorderIcon className='postIcon'/>
                <ChatBubbleOutlineIcon className='postIcon'/>
                <TelegramIcon className='postIcon'/>
            </div>
            <div className='post__iconSave'>
                <BookmarkBorderIcon className='postIcon'/>
            </div>
        </div>
      </div>
      Liked by {post.likes} people
    </div>
  )
}
