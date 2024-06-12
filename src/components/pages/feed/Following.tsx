import React from 'react'
import Post from '@/components/post/Post'
import { postService } from '@/services/post/post.service'

const Following = async () => {
  const posts = await postService.GetFollowing()

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Post
          data={post}
          redirectOnClickPost
          key={`${post.author.username}${post.id}`}
        />
      ))}
    </div>
  )
}

export default Following
