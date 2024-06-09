import { $fetch } from '@/lib/fetch/customFetch'
import { PostData } from '@/types/post.type'

class PostService {
  async GetFollowing() {
    try {
      const { data: posts } = await $fetch.get<Array<PostData>>(
        '/post/following',
        true,
      )

      return posts
    } catch (error) {
      throw error
    }
  }

  async AddLike(postId: number) {
    try {
      const { data } = await $fetch.post<boolean>(`/like/add/${postId}`, true)

      return data
    } catch (error) {
      throw error
    }
  }

  async RemoveLike(postId: number) {
    try {
      const { data } = await $fetch.post<boolean>(
        `/like/remove/${postId}`,
        true,
      )

      return data
    } catch (error) {
      throw error
    }
  }

  async AddRepost(postId: number) {
    try {
      const { data } = await $fetch.post<boolean>(`/repost/add/${postId}`, true)

      return data
    } catch (error) {
      throw error
    }
  }

  async RemoveRepost(postId: number) {
    try {
      const { data } = await $fetch.post<boolean>(
        `/repost/remove/${postId}`,
        true,
      )

      return data
    } catch (error) {
      throw error
    }
  }
}

export const postService = new PostService()
