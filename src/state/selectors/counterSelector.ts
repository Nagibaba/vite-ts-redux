import { createSelector } from '@reduxjs/toolkit'

export const counterSelector = createSelector(
  (state) => state.counter,
  (counter) => counter.count
)
