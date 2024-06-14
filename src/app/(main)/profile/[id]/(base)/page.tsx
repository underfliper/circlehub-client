import { userService } from '@/services/user/user.service'
import ProfilePosts from '@/components/pages/profile/ProfilePosts'

export default async function ProfilePage({
  params,
}: {
  params: { id: number }
}) {
  const { data: posts } = await userService.GetAllPosts(params.id)

  return <ProfilePosts data={posts} />
}
