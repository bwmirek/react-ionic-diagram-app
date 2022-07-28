import { MarkerType } from 'react-flow-renderer';
import createDiagramElements from './createDiagramElements';

describe('createDiagramElements', () => {
  it('should create 3 nodes', () => {
    const { nodes } = createDiagramElements();

    expect(nodes.length).toBe(3);
  });

  it('should merge shared node properties correctly', () => {
    const { nodes } = createDiagramElements();

    nodes.forEach((node) => {
      expect(node.id).toBeDefined();
      expect(node.data.label).toBeDefined();
      expect(node.position.x).toBeDefined();
      expect(node.position.y).toBeDefined();
      expect(node.selectable).toBe(false);
      expect(node.connectable).toBe(false);
    });
  });

  it('should create 3 edges', () => {
    const { edges } = createDiagramElements();

    expect(edges.length).toBe(3);
  });

  it('should merge shared edge properties correctly', () => {
    const { edges } = createDiagramElements();

    edges.forEach((edge) => {
      expect(edge.id).toBeDefined();
      expect(edge.source).toBeDefined();
      expect(edge.target).toBeDefined();
      expect(edge.type).toBe('floating');
      expect(edge.animated).toBe(true);
      expect(edge.markerEnd).toStrictEqual({ type: MarkerType.Arrow });
    });
  });
});
