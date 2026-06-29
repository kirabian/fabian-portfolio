"use client";

import React, { useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  Connection,
  Edge,
  Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import SkillNode from './SkillNode';

const nodeTypes = {
  skill: SkillNode,
};

const initialNodes: Node[] = [
  // Languages (Left Column)
  { id: 'php', type: 'skill', position: { x: 50, y: 50 }, data: { label: 'PHP', category: 'Language', color: '#777bb3' } },
  { id: 'js', type: 'skill', position: { x: 50, y: 150 }, data: { label: 'JavaScript', category: 'Language', color: '#f7df1e' } },
  { id: 'dart', type: 'skill', position: { x: 50, y: 250 }, data: { label: 'Dart', category: 'Language', color: '#0175c2' } },
  { id: 'html', type: 'skill', position: { x: 50, y: 350 }, data: { label: 'HTML/CSS', category: 'Language', color: '#e34c26' } },

  // Frameworks (Middle Column)
  { id: 'laravel', type: 'skill', position: { x: 300, y: 50 }, data: { label: 'Laravel', category: 'Framework', color: '#ff2d20' } },
  { id: 'react', type: 'skill', position: { x: 300, y: 120 }, data: { label: 'React', category: 'Framework', color: '#61dafb' } },
  { id: 'next', type: 'skill', position: { x: 300, y: 200 }, data: { label: 'Next.js', category: 'Framework', color: '#ffffff' } },
  { id: 'flutter', type: 'skill', position: { x: 300, y: 280 }, data: { label: 'Flutter', category: 'Framework', color: '#42a5f5' } },
  { id: 'tailwind', type: 'skill', position: { x: 300, y: 360 }, data: { label: 'Tailwind CSS', category: 'Library', color: '#38b2ac' } },

  // Databases & Tools (Right Column)
  { id: 'mysql', type: 'skill', position: { x: 550, y: 50 }, data: { label: 'MySQL', category: 'Database', color: '#4479a1' } },
  { id: 'firebase', type: 'skill', position: { x: 550, y: 150 }, data: { label: 'Firebase', category: 'Database', color: '#ffca28' } },
  { id: 'sqlite', type: 'skill', position: { x: 550, y: 250 }, data: { label: 'SQLite', category: 'Database', color: '#003b57' } },
  { id: 'git', type: 'skill', position: { x: 550, y: 350 }, data: { label: 'Git & GitHub', category: 'Tool', color: '#f05133' } },
];

const initialEdges: Edge[] = [
  { id: 'e-php-laravel', source: 'php', target: 'laravel', animated: true, style: { stroke: '#777bb3' } },
  { id: 'e-js-react', source: 'js', target: 'react', animated: true, style: { stroke: '#f7df1e' } },
  { id: 'e-react-next', source: 'react', target: 'next', animated: true, style: { stroke: '#61dafb' } },
  { id: 'e-html-tailwind', source: 'html', target: 'tailwind', animated: true, style: { stroke: '#e34c26' } },
  { id: 'e-dart-flutter', source: 'dart', target: 'flutter', animated: true, style: { stroke: '#0175c2' } },
  
  { id: 'e-laravel-mysql', source: 'laravel', target: 'mysql', animated: true, style: { stroke: '#ff2d20' } },
  { id: 'e-flutter-firebase', source: 'flutter', target: 'firebase', animated: true, style: { stroke: '#42a5f5' } },
  { id: 'e-flutter-sqlite', source: 'flutter', target: 'sqlite', animated: true, style: { stroke: '#42a5f5' } },
];

export default function SkillsGraph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-full h-[600px] border border-white/10 rounded-2xl overflow-hidden bg-[#0a0a0a]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
        className="dark"
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#333" gap={16} />
        <Controls className="bg-[#1e1e1e] border-white/10 fill-white" />
      </ReactFlow>
    </div>
  );
}
