enum UserGender {
  FEMALE = 'Female',
  MALE = 'Male',
}

export interface UserProfile {
  firstName: string
  lastName: string
  gender?: UserGender
  avatar?: string
  city?: string
  bio?: string
}

export interface UserInfo {
  id: number
  username: string
  createdAt: Date
  updatedAt: Date
  profile: UserProfile
  _count: {
    following: number
    followers: number
    posts: number
  }
}

export interface UserProfileShort {
  firstName: string
  lastName: string
  avatar?: string
}

export interface UserInfoShort {
  id: number
  username: string
  profile: UserProfileShort
}

export interface FollowUnfollow {
  followStatus: boolean
}
