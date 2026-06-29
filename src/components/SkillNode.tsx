import { Handle, Position } from '@xyflow/react';

type SkillNodeData = {
  label: string;
  category: string;
  color: string;
};

export default function SkillNode({ data, isConnectable }: { data: SkillNodeData, isConnectable: boolean }) {
  return (
    <div className="relative flex flex-col items-start min-w-[120px] p-2 rounded-xl bg-[#1e1e1e] border border-[#333] shadow-md">
      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-2 h-2 rounded-full !bg-zinc-500 border-none" />
      <Handle type="target" position={Position.Left} id="left" isConnectable={isConnectable} className="w-2 h-2 rounded-full !bg-zinc-500 border-none" />
      
      <div className="flex items-center gap-2 mb-1 w-full px-1">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }}></div>
        <span className="text-white font-semibold text-sm">{data.label}</span>
      </div>
      <div className="px-1">
        <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">{data.category}</span>
      </div>

      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-2 h-2 rounded-full !bg-zinc-500 border-none" />
      <Handle type="source" position={Position.Right} id="right" isConnectable={isConnectable} className="w-2 h-2 rounded-full !bg-zinc-500 border-none" />
    </div>
  );
}
