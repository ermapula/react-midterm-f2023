import '../styles/Post.css'

export default function Post({post}) {
  return (
    <div className='post'>
      <h2>
        {post.id}
      </h2>
      <p>
        {post.postText}
      </p>
      <div className='post-actions'>
        <div>
          Comments {post.comments.length}
        </div>
      </div>
    </div>
  )
}
