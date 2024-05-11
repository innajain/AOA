import { Activity } from './types'

export const activityData: Activity[] = [
  {
    name: 'A',
    duration: 1,
    predecessorsIndices: [],
  },
  {
    name: 'B',
    duration: 2,
    predecessorsIndices: [],
  },
  {
    name: 'C',
    duration: 3,
    predecessorsIndices: [0],
  },
  {
    name: 'D',
    duration: 4,
    predecessorsIndices: [0, 1],
  },
  {
    name: 'E',
    duration: 5,
    predecessorsIndices: [1],
  },
  {
    name: 'F',
    duration: 4,
    predecessorsIndices: [3, 4],
  },
  {
    name: 'G',
    duration: 6,
    predecessorsIndices: [2, 4],
  },
  {
    name: 'H',
    duration: 6,
    predecessorsIndices: [3, 6],
  },
  {
    name: 'I',
    duration: 2,
    predecessorsIndices: [5],
  },
  {
    name: 'J',
    duration: 3,
    predecessorsIndices: [5, 7],
  },
]
