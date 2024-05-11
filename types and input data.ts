export type Activity = {
  name: string
  predecessors: string[]
}

export const activityData: Activity[] = [
  { name: 'A', predecessors: [] },
  { name: 'B', predecessors: [] },
  { name: 'C', predecessors: ['A'] },
  { name: 'D', predecessors: ['A', 'B'] },
  { name: 'E', predecessors: ['B'] },
  { name: 'F', predecessors: ['D', 'E'] },
  { name: 'G', predecessors: ['C', 'E'] },
  { name: 'H', predecessors: ['D', 'G'] },
  { name: 'I', predecessors: ['F'] },
  { name: 'J', predecessors: ['F', 'H'] },
]
export type TableTile = {
  name: string
  start: number | 'start'
  end: number | 'end'
}
