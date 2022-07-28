import { useMemo } from 'react';
import ReactFlow, { Background, BackgroundVariant, Controls } from 'react-flow-renderer';
import { NodeMouseHandler } from 'react-flow-renderer/dist/esm/types';
import useNodeClick from '../hooks/useNodeClick';
import createDiagramElements from '../utils/createDiagramElements';
import FloatingEdge from '../components/FloatingEdge';

const Diagram: React.FC = () => {
  const edgeTypes = useMemo(() => ({ floating: FloatingEdge, }), []);

  const onNodeClick = useNodeClick();
  const handleNodeClick: NodeMouseHandler = (_, n) => {
    onNodeClick(n);
  };

  const { nodes, edges } = createDiagramElements();

  return (
    <>
      <ReactFlow
        fitView={true}
        defaultNodes={nodes}
        defaultEdges={edges}
        edgeTypes={edgeTypes}
        onNodeClick={handleNodeClick}
      >
        <Controls/>
        <Background variant={BackgroundVariant.Dots} gap={32}/>
      </ReactFlow>
    </>
  );
};

export default Diagram;
