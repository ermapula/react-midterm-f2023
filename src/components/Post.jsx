import '../styles/Post.css'

export default function Post({post}) {
  return (
    <div className='post'>
      {/* <h2>
        {post.id}
      </h2> */}
      <p>
        {post.postText}
      </p>
      <div className='post-actions'>
        <p style={{fontSize: 12}}>
          Comments {post.comments ? post.comments.length : 0}
        </p>
        <p style={{fontSize: 12}}>
          Reposts {post.reposts}
        </p>
        <p style={{fontSize: 12}}>
          Likes {post.likes}
        </p>
      </div>
    </div>
  )
}
