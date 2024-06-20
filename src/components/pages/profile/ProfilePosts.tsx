import Post from '@/components/post/Post'
import { PostData } from '@/types/post.type'
import React, { FC } from 'react'

interface ProfilePostsProps {
  data: Array<PostData>
}

const ProfilePosts: FC<ProfilePostsProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-4">
      {data.map((post) => (
        <Post data={post} redirectOnClickPost key={`postid_${post.id}`} />
      ))}
    </div>
  )
}

export default ProfilePosts
