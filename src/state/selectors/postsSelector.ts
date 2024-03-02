import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const postsSelector = createSelector(
  (state: RootState) => state.posts,
  (posts) => posts.data
)
