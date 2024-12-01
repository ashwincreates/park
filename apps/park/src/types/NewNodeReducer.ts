import { Node } from "./Node";

export enum Action {
    UPDATE_NODE = 'update_node',
    UPDATE_NEIGHBOUR = 'update_neighbour',
    REFRESH_NEIGHBOUR = 'refresh_neighbour',
    SUBMIT = 'submit'
}
export type NewNodeAction = {
    action: Action,
    payload: {
        node?: Node,
        neighbours?: Node[]
    }
};
export type NodeDetails = {
    node: Node,
    neighbours: Node[]
    readonly incomingNeighbours: Node[]
}