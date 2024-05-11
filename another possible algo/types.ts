export type Activity = {
  name: string
  duration: number
  predecessorsIndices: number[]
}

export class NodeState {
  constructor(
    public name: string,
    public emergingArrows: (ArrowTask | DashedArrow)[]
  ) {}
}

export class ArrowTask {
  constructor(
    public activityName: string,
    public duration: number,
    public destinationNode: NodeState
  ) {}
}
export class DashedArrow {
  constructor(public destinationNode: NodeState) {}
}
