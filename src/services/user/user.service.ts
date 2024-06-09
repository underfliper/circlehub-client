import { $fetch } from '@/lib/fetch/customFetch'
import { FollowUnfollow, UserInfo, UserInfoShort } from '@/types/user.type'

class UserService {
  async GetProfile(userId: number) {
    try {
      const profile = await $fetch.get<UserInfo>(
        `/user/profile/${userId}`,
        true,
      )

      return profile
    } catch (error) {
      throw error
    }
  }

  async GetSuggestedFollows() {
    try {
      const suggested = await $fetch.get<Array<UserInfoShort>>(
        '/user/suggestedFollows',
        true,
      )

      return suggested
    } catch (error) {
      throw error
    }
  }

  async Follow(followId: number) {
    try {
      const follow = await $fetch.post<FollowUnfollow>('/user/follow', true, {
        followId: followId,
      })

      return follow
    } catch (error) {
      throw error
    }
  }

  async Unfollow(followId: number) {
    try {
      const unfollow = await $fetch.post<FollowUnfollow>(
        '/user/unfollow',
        true,
        { followId },
      )

      return unfollow
    } catch (error) {
      throw error
    }
  }
}

export const userService = new UserService()