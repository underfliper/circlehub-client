import { UserInfoShort } from './user.type'

export interface PostData {
  id: number
  content: string
  createdAt: string
  updatedAt: string
  author: UserInfoShort
  attachments: Array<Attachment>
  _count: PostCounts
  controls: {
    isLiked: boolean
    isReposted: boolean
  }
}

enum AttachmentType {
  IMAGE = 'IMAGE',
  VIDEO = 'VIDEO',
}

export interface Attachment {
  id: number
  url: string
  type: AttachmentType
}

interface PostCounts {
  likes: number
  reposts: number
  comments: number
}

export interface PostComment {
  id: number
  text: string
  createdAt: string
  user: UserInfoShort
}
