import fs from 'fs'

const data: any[] = [
  ['A', []],
  ['B', []],
  ['C', ['A']],
  ['D', ['A', 'B']],
  ['E', ['B']],
  ['F', ['D', 'E']],
  ['G', ['C', 'E']],
  ['H', ['D', 'G']],
  ['I', ['F']],
  ['J', ['F', 'H']],
]
const table: any[] = []

let currEndNode = 0
data.forEach((activity) => {
  let start: string | number
  currEndNode++
  if (activity[1].length == 0) {
    start = 'start'
  } else if (activity[1].length == 1) {
    let tile: any
    for (let i = 0; i < table.length; i++) {
      if (table[i][0] == activity[1][0]) {
        tile = table[i]
      }
    }
    start = tile[2]
  } else {
    activity[1].forEach((predecessor: any) => {
      let tile: any
      for (let i = 0; i < table.length; i++) {
        if (table[i][0] == predecessor) {
          tile = table[i]
        }
      }
      table.push([`${predecessor}${activity[0]}`, tile[2], currEndNode])
    })
    start = currEndNode
    currEndNode++
  }

  table.push([activity[0], start, currEndNode])
})

const startNodes = table.map((tile) => tile[1])
const endNodes = table.map((tile) => tile[2])

const setStart = new Set(startNodes)
const setEnd = new Set(endNodes)
console.log('startNodes', setStart)
console.log('endNodes', setEnd)

const finalNodes = [...setEnd].filter((node) => !setStart.has(node))
console.log('finalNodes', finalNodes)

finalNodes.forEach((node) => {
  table.push([`end${node}`, node, 'end'])
})

fs.writeFileSync('src/algorithm/file.json', JSON.stringify(table))
