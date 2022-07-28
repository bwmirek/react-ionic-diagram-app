import { Node } from 'react-flow-renderer';
import calculateNodesIntersectionPosition from './calculateNodesIntersectionPosition';

describe('calculateNodesIntersectionPosition', () => {
  const firstNode: Node = {
    id: 'node-first',
    position: {
      x: 0,
      y: 0,
    },
    data: {},
    width: 150,
    height: 36
  };

  const secondNode: Node = {
    id: 'node-second',
    position: {
      x: 100,
      y: 100,
    },
    data: {},
    width: 150,
    height: 36
  };

  it('should calculate sufficiently close intersection points between two nodes', () => {
    const firstIntersectionPoint = calculateNodesIntersectionPosition(firstNode, secondNode);
    const secondIntersectionPoint = calculateNodesIntersectionPosition(secondNode, firstNode);

    // [93, 36] and [157, 100] are precalculated correct points
    expect(firstIntersectionPoint.x).toBeCloseTo(93, 5);
    expect(firstIntersectionPoint.y).toBeCloseTo(36, 5);
    expect(secondIntersectionPoint.x).toBeCloseTo(157, 5);
    expect(secondIntersectionPoint.y).toBeCloseTo(100, 5);
  });
});
