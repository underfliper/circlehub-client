import { Metadata } from 'next'
import Breadcrumbs from '@/components/breadcrumbs/Breadcrumbs'
import FollowList from '@/components/pages/follow/FollowList'
import { userService } from '@/services/user/user.service'

export const metadata: Metadata = {
  title: 'Following',
}

export default async function FollowingPage({
  params,
}: {
  params: { id: number }
}) {
  const { data: followers } = await userService.GetFollowing(params.id)

  return (
    <div className="flex flex-col gap-4 pb-4">
      <Breadcrumbs title="Following" />
      <FollowList data={followers} />
    </div>
  )
}
