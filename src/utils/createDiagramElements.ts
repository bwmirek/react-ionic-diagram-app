import _ from 'lodash';
import { Node, Edge, MarkerType } from 'react-flow-renderer';

const createNodes = (): Node[] => {
  const nodes: Node[] = [];
  const sharedNodeProperties: Partial<Node> = {
    selectable: false,
    connectable: false,
  };

  nodes.push(_.merge({ id: 'node-a', data: { label: `Node A` }, position: { x: -200, y: 0 } }, sharedNodeProperties));
  nodes.push(_.merge({ id: 'node-b', data: { label: `Node B` }, position: { x: 200, y: 0 } }, sharedNodeProperties));
  nodes.push(_.merge({ id: 'node-c', data: { label: `Node C` }, position: { x: 0, y: 250 } }, sharedNodeProperties));

  return nodes;
};

const createEdges = (): Edge[] => {
  const edges: Edge[] = [];
  const sharedEdgeProperties: Partial<Edge> = {
    type: 'floating',
    animated: true,
    markerEnd: {
      type: MarkerType.Arrow,
    },
  };

  edges.push(_.merge({ id: `edge-a-b`, source: `node-a`, target: 'node-b', }, sharedEdgeProperties));
  edges.push(_.merge({ id: `edge-a-c`, source: `node-a`, target: 'node-c', }, sharedEdgeProperties));
  edges.push(_.merge({ id: `edge-b-c`, source: `node-b`, target: 'node-c', }, sharedEdgeProperties));

  return edges;
};

const createDiagramElements = () => {
  const nodes = createNodes();
  const edges = createEdges();

  return { nodes, edges };
};

export default createDiagramElements;
