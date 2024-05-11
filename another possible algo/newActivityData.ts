import { Activity } from './types'

export const newActivityData: Activity[] = [
  {
    name: 'A',
    duration: 1,
    predecessorsIndices: [],
  },
  {
    name: 'B',
    duration: 1,
    predecessorsIndices: [0],
  },
  {
    name: 'C',
    duration: 1,
    predecessorsIndices: [1],
  },
  {
    name: 'D',
    duration: 1,
    predecessorsIndices: [1],
  },
  {
    name: 'E',
    duration: 1,
    predecessorsIndices: [2, 3],
  },
  {
    name: 'F',
    duration: 1,
    predecessorsIndices: [4],
  },
  {
    name: 'G',
    duration: 1,
    predecessorsIndices: [5],
  },
  {
    name: 'H',
    duration: 1,
    predecessorsIndices: [5],
  },
]
