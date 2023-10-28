import { useState } from 'react'
import '../styles/PostAdd.css'


export default function PostAdd({setPosts}) {
  const [postText, setPostText] = useState("");

  function handlePostAdd() {
    if(!postText) 
      return;

    return setPosts((posts) => {
      return [...posts, {
        id: posts.length + 1,
        postText
      }]
    })
  }

  return (
    <div className='post-add-form'>
      <input 
        className='post-text-input'
        type="text"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        />
      <button 
        className='post-add-btn'
        onClick={() => handlePostAdd()}  
        >
        Post
      </button>
    </div>
  )
};
