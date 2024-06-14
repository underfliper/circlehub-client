import { userService } from '@/services/user/user.service'
import ProfilePosts from '@/components/pages/profile/ProfilePosts'

export default async function ProfileLikesPage({
  params,
}: {
  params: { id: number }
}) {
  const { data: posts } = await userService.GetLikes(params.id)

  return <ProfilePosts data={posts} />
}
