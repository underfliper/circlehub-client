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
}

export const postService = new PostService()
