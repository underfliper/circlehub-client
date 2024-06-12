import { $fetch } from '@/lib/fetch/customFetch'
import { PostComment, PostData } from '@/types/post.type'

class PostService {
  async GetPost(postId: number) {
    try {
      const { data: post } = await $fetch.get<PostData>(`/post/${postId}`, true)

      return post
    } catch (error) {
      throw error
    }
  }

  async GetPostComments(postId: number) {
    try {
      const { data: comments } = await $fetch.get<Array<PostComment>>(
        `/post/${postId}/comments`,
        true,
      )

      return comments
    } catch (error) {
      throw error
    }
  }

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

  async GetSuggested() {
    try {
      const { data: posts } = await $fetch.get<Array<PostData>>(
        '/post/suggested',
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
