import Post from '@/components/post/Post'
import { postService } from '@/services/post/post.service'
import React from 'react'

const Suggested = async () => {
  const posts = await postService.GetSuggested()

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Post data={post} key={`${post.author.username}${post.id}`} />
      ))}
    </div>
  )
}

export default Suggested
