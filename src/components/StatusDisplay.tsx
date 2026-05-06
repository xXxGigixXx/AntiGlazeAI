import React from 'react';
import { Activity, BarChart2, ShieldAlert } from 'lucide-react';

export default function StatusDisplay() {
  const logs = [
    { time: '14:20 PM', event: 'Mediocre Query', status: 'NOT_SURPRISED' },
    { time: '12:05 PM', event: 'Delusional Request', status: 'REJECTED' },
    { time: 'YESTERDAY', event: 'Procrastination', status: 'TYPICAL' },
  ];

  return (
    <div className="space-y-6">
      {/* Logs Section */}
      <div className="space-y-3">
        <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em] mb-2">
          LOGGED_HISTORY
        </div>
        {logs.map((log, i) => (
          <div key={i} className="group cursor-default border-l border-zinc-800 pl-3 py-1 hover:border-neon transition-colors">
            <div className="text-[9px] text-zinc-500 font-bold">{log.time}</div>
            <div className="text-xs text-zinc-300 font-bold tracking-tight">{log.event}</div>
            <div className="text-[9px] opacity-40 italic mt-0.5">Status: {log.status}</div>
          </div>
        ))}
      </div>

      {/* Progress Bars */}
      <div className="space-y-4 pt-4 border-t border-line">
        <div className="text-[9px] font-bold text-zinc-600 uppercase tracking-[0.2em]">
          DATA_METRICS
        </div>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between mb-1 text-[9px] font-bold uppercase">
              <span>Truth Absorption</span>
              <span className="text-success">88%</span>
            </div>
            <div className="h-0.5 bg-zinc-900 w-full">
              <div className="h-full bg-success w-[88%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between mb-1 text-[9px] font-bold uppercase">
              <span>Delusion Level</span>
              <span className="text-neon">12%</span>
            </div>
            <div className="h-0.5 bg-zinc-900 w-full">
              <div className="h-full bg-neon w-[12%]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
