import { render } from '@testing-library/react';
import { Node, Position, } from 'react-flow-renderer';
import FloatingEdge from './FloatingEdge';

const firstNode: Node = {
  id: 'node-source',
  position: {
    x: 0,
    y: 0,
  },
  data: {},
  width: 150,
  height: 36,
};

const secondNode: Node = {
  id: 'node-target',
  position: {
    x: 100,
    y: 100,
  },
  data: {},
  width: 150,
  height: 36,
};

jest.mock('react-flow-renderer', () => ({
  useNodes: () => [firstNode, secondNode]
}));

jest.mock('../utils/calculateNodesIntersectionPosition', () => () => ({ x: 100, y: 100 }));

// Fix Warning: The tag <path> is unrecognized in this browser.
// by wrapping it with <svg>
const renderElement = (sourceNode: Node, targetNode: Node, sourceId: string, targetId: string) => {
  return render(
    <svg>
      <FloatingEdge
        id={'test'}
        sourcePosition={'bottom' as Position}
        targetPosition={'top' as Position}
        source={sourceId}
        target={targetId}
        sourceX={sourceNode.position.x}
        sourceY={sourceNode.position.y}
        targetX={targetNode.position.x}
        targetY={targetNode.position.y}
      />
    </svg>
  );
};

describe('FloatingEdge', () => {
  it('should render without crashing', () => {
    const { baseElement } = renderElement(firstNode, secondNode, firstNode.id, secondNode.id);

    expect(baseElement).toMatchSnapshot();
  });
  it('should render empty', () => {
    const { baseElement } = renderElement(firstNode, secondNode, firstNode.id, 'node-missing');

    expect(baseElement).toMatchSnapshot();
  });
});

