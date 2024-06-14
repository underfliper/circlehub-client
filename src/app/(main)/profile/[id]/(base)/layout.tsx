import { userService } from '@/services/user/user.service'
import ProfileInfo from '@/components/pages/profile/ProfileInfo'
import ProfileNavbar from '@/components/pages/profile/profileNavbar/ProfileNavbar'

export default async function ProfileBaseLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: { id: number }
}>) {
  const { data: userProfile } = await userService.GetProfile(params.id)

  return (
    <div className="flex flex-col gap-4 pb-4">
      <ProfileInfo data={userProfile} />
      <ProfileNavbar userId={userProfile.id} />
      {children}
    </div>
  )
}
