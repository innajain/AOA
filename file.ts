import fs from 'fs'
import { TableTile, activityData } from './types and input data'

const table: TableTile[] = []

let currEndNode = 0
activityData.forEach((activity) => {
  let start: 'start' | number
  currEndNode++
  if (activity.predecessors.length == 0) {
    start = 'start'
  } else if (activity.predecessors.length == 1) {
    const predecessorTile = table.find(
      (tile) => tile.name == activity.predecessors[0]
    )!
    start = predecessorTile.end as number
  } else {
    activity.predecessors.forEach((predecessor: any) => {
      const predecessorTile = table.find((tile) => tile.name == predecessor)!
      const dummyTile = {
        name: `${predecessor}${activity.name}`,
        start: predecessorTile.end as number,
        end: currEndNode,
      }
      table.push(dummyTile)
    })
    start = currEndNode
    currEndNode++
  }

  table.push({ name: activity.name, start, end: currEndNode })
})

const startNodes = new Set(table.map((tile) => tile.start))
const endNodes = new Set(table.map((tile) => tile.end))

const finalNodes = [...endNodes].filter(
  (node) => !startNodes.has(node as number)
)

finalNodes.forEach((node) => {
  table.push({ name: `end${node}`, start: node as number, end: 'end' })
})

fs.writeFileSync(
  'D:/coding/algorithm/file.json',
  JSON.stringify(table, null, 2)
)
