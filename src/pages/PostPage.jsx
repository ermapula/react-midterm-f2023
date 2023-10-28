import '../styles/Post.css'
import '../styles/PostPage.css'
import '../styles/Home.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import posts from '../data'
import Post from '../components/Post';

export default function PostPage() {
  const post_id = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const [postData] = posts.filter(post => post.id !== post_id)
    setPost(postData)
  }, [post_id])


  return (
    <div className='container'>
      <div className='main'>
        <Post post={post} />
        <div>
          {
            post.comments?.map((comment, id) => (
              <div key={id}>
                <p className='comment'>
                  {comment}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
  
}
