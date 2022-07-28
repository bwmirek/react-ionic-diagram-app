import { EdgeProps, useNodes } from 'react-flow-renderer';
import calculateNodesIntersectionPosition from '../utils/calculateNodesIntersectionPosition';

function FloatingEdge(props: EdgeProps) {
  const nodes = useNodes();
  const sourceNode = nodes.find((node) => node.id === props.source);
  const targetNode = nodes.find((node) => node.id === props.target);

  if (!sourceNode || !targetNode) {
    return null;
  }

  const sourceIntersectionPoint = calculateNodesIntersectionPosition(sourceNode, targetNode);
  const targetIntersectionPoint = calculateNodesIntersectionPosition(targetNode, sourceNode);

  const d = `M ${sourceIntersectionPoint.x},${sourceIntersectionPoint.y}L ${targetIntersectionPoint.x},${targetIntersectionPoint.y}`;

  return (
    <g className="react-flow__connection">
      <path id={props.id} className="react-flow__edge-path" d={d} markerEnd={props.markerEnd} style={props.style}/>
    </g>
  );
}

export default FloatingEdge;
