import { postService } from '@/services/post/post.service'
import PagePost from '@/components/pages/post/PagePost'

export default async function PostPage({ params }: { params: { id: number } }) {
  const post = await postService.GetPost(params.id)
  const comments = await postService.GetPostComments(params.id)

  return <PagePost post={post} comments={comments} />
}
