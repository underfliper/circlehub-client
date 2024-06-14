import { userService } from '@/services/user/user.service'
import ProfilePosts from '@/components/pages/profile/ProfilePosts'

export default async function ProfileRepostsPage({
  params,
}: {
  params: { id: number }
}) {
  const { data: posts } = await userService.GetReposts(params.id)

  return <ProfilePosts data={posts} />
}
