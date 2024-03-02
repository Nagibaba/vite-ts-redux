import { useAppDispatch, useAppSelector } from '../state/hook.ts'
import { useEffect } from 'react'
import { loadPosts } from '../state/slices/postsSlice.ts'
import { postsSelector } from '../state/selectors/postsSelector.ts'

export const Posts: React.FC = () => {
  const dispatch = useAppDispatch()
  const posts = useAppSelector(postsSelector)

  useEffect(() => {
    dispatch(loadPosts())
  }, [dispatch])

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </>
  )
}
