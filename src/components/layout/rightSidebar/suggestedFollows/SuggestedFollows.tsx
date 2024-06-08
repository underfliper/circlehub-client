import React from 'react'
import { userService } from '@/services/user/user.service'
import UserCard from '@/components/userCard/UserCard'
import FollowButton from '@/components/followButton/FollowButton'

const SuggestedFollows = async () => {
  const { data: suggested } = await userService.GetSuggestedFollows()

  return (
    <div className="flex flex-col gap-2 p-4 rounded-xl bg-background-50">
      <h2 className="font-semibold text-xl text-txt-950">Suggested follows</h2>
      <span className="w-full h-[2px] block rounded-sm bg-background-100"></span>
      <div className="flex flex-col gap-2">
        {suggested.map((item) => {
          const {
            id,
            username,
            profile: { firstName, lastName, avatar },
          } = item

          const Username = () => (
            <span className="text-primary-600 text-xs font-medium">{`@${username}`}</span>
          )

          return (
            <div
              className="flex gap-4 justify-between items-center"
              key={`${firstName}${lastName}${id}`}>
              <UserCard
                id={id}
                name={`${firstName} ${lastName}`}
                avatar={avatar}
                content={<Username />}
              />
              <FollowButton followId={id} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SuggestedFollows
