import PostAdd from '../components/PostAdd'
import '../styles/Home.css'
import postsData from '../data';
import { useState } from 'react';
import Post from '../components/Post';
import { Link } from 'react-router-dom';


export default function Home() {
  const [posts, setPosts] = useState(postsData);
  
  return (
    <div className="container">
      <div className='main'>
        <PostAdd setPosts={setPosts} />
        <div>
          {
            posts.map(post => (
              <Link 
                to={`post/${post.id}`}
                key={post.id}
                className='link'
                >
                <Post 
                  post={post}
                  />
              
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
