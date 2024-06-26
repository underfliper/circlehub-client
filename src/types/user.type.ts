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

export interface UserCounts {
  following: number
  followers: number
  posts: number
  reposts: number
  likes: number
}

export interface UserInfo {
  id: number
  username: string
  createdAt: string
  updatedAt: string
  profile: UserProfile
  _count: UserCounts
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

export interface Follow extends UserInfoShort {
  state: {
    follow: boolean
    createdAt: string
  }
}
