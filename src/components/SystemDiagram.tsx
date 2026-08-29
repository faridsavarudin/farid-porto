'use client';

import { motion, useReducedMotion } from 'framer-motion';

/**
 * An honest, diagrammatic motif for the realtime-systems work: four field
 * devices reporting to a control centre over MQTT / WebSocket / GPS. Decorative
 * (aria-hidden) — it echoes the systems described in the copy, invents nothing.
 */
const nodes = [
  { id: 'cab', label: 'cab', y: 46 },
  { id: 'crossing', label: 'crossing', y: 132 },
  { id: 'bus', label: 'bus', y: 218 },
  { id: 'app', label: 'app', y: 304 },
];

const edges = [
  { y: 46, label: 'MQTT' },
  { y: 132, label: 'MQTT' },
  { y: 218, label: 'GPS' },
  { y: 304, label: 'WebSocket' },
];

const HUB_X = 338;
const HUB_Y = 175;
const NODE_X = 30;

export default function SystemDiagram() {
  const reduce = useReducedMotion();

  return (
    <div className="rounded-xl border border-ink-800 bg-ink-900/70 p-5 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset]">
      <div className="mb-4 flex items-center justify-between">
        <span className="mono-label">signal path</span>
        <span className="flex items-center gap-1.5 font-mono text-[0.7rem] text-ink-500">
          <span className="h-1.5 w-1.5 rounded-full bg-signal-green" /> live
        </span>
      </div>

      <svg
        viewBox="0 0 380 350"
        className="w-full"
        role="img"
        aria-hidden="true"
        fill="none"
      >
        {/* edges */}
        {edges.map((edge, i) => {
          const d = `M ${NODE_X + 12} ${nodes[i].y} C 150 ${nodes[i].y}, 220 ${HUB_Y}, ${HUB_X - 14} ${HUB_Y}`;
          return (
            <g key={edge.label + i}>
              <path d={d} stroke="#273545" strokeWidth={1.5} />
              <motion.path
                d={d}
                stroke="#43c08d"
                strokeWidth={1.5}
                strokeDasharray="4 10"
                initial={{ strokeDashoffset: 0 }}
                animate={reduce ? undefined : { strokeDashoffset: -140 }}
                transition={{ duration: 3.5 + i, repeat: Infinity, ease: 'linear' }}
                opacity={0.7}
              />
              <text
                x={150}
                y={(nodes[i].y + HUB_Y) / 2 - 6}
                className="fill-ink-500 font-mono"
                fontSize={9}
                letterSpacing={1}
              >
                {edge.label}
              </text>
            </g>
          );
        })}

        {/* device nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <rect
              x={NODE_X - 12}
              y={n.y - 12}
              width={24}
              height={24}
              rx={5}
              className="fill-ink-850 stroke-ink-700"
              strokeWidth={1.5}
            />
            <circle cx={NODE_X} cy={n.y} r={2.5} className="fill-signal-green" />
            <text
              x={NODE_X - 20}
              y={n.y + 3}
              textAnchor="end"
              className="fill-ink-400 font-mono"
              fontSize={10}
            >
              {n.label}
            </text>
          </g>
        ))}

        {/* control-centre hub */}
        <rect
          x={HUB_X - 14}
          y={HUB_Y - 22}
          width={28}
          height={44}
          rx={6}
          className="fill-ink-850 stroke-signal-amber"
          strokeWidth={1.5}
        />
        <circle cx={HUB_X} cy={HUB_Y} r={3} className="fill-signal-amber" />
        <text
          x={HUB_X}
          y={HUB_Y + 40}
          textAnchor="middle"
          className="fill-ink-400 font-mono"
          fontSize={10}
        >
          control
        </text>
      </svg>
    </div>
  );
}
