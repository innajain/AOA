import { Activity, ArrowTask, DashedArrow, NodeState } from './types'

/**
 * Generates an Activity-on-Arrow (AOA) data structure based on the provided activity data.
 *
 * @param activityData An array of activity objects.
 * @returns The start node of the AOA data structure.
 */
export function getAoaDataStructure(activityData: Activity[]) {
  const states: { [csv: string]: NodeState } = {}
  const startNode = new NodeState('start', [])
  states['[]'] = startNode
  let endingNodes: NodeState[] = [startNode]
  activityData.forEach((activity, index) => {
    let state = states[JSON.stringify(activity.predecessorsIndices)]
    if (!state) {
      state = new NodeState(JSON.stringify(activity.predecessorsIndices), [])

      states[JSON.stringify(activity.predecessorsIndices)] = state
      activity.predecessorsIndices.forEach((predecessorIndex) => {
        const temp = states[`[${predecessorIndex}]`]
        if (temp.emergingArrows.length === 0) {
          endingNodes = endingNodes.filter((endingNode) => endingNode !== temp)
        }
        states[`[${predecessorIndex}]`].emergingArrows.push(
          new DashedArrow(state)
        )
      })
    }
    const destNode = new NodeState(`[${index}]`, [])
    endingNodes.push(destNode)
    states[`[${index}]`] = destNode
    if (state.emergingArrows.length === 0) {
      endingNodes = endingNodes.filter((endingNode) => endingNode !== state)
    }
    state.emergingArrows.push(
      new ArrowTask(activity.name, activity.duration, destNode)
    )
  })
  const finishNode = new NodeState('finish', [])
  endingNodes.forEach((endingNode) => {
    endingNode.emergingArrows.push(new DashedArrow(finishNode))
  })
  return startNode
}
