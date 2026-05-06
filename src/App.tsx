import Chat from './components/Chat';
import StatusDisplay from './components/StatusDisplay';
import { Cpu, Terminal } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen lg:h-screen bg-bg text-ink font-mono flex flex-col p-4 lg:p-6 space-y-4 overflow-x-hidden lg:overflow-hidden">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between border-b border-line pb-4 gap-4 shrink-0">
        <div className="flex flex-wrap items-center gap-3">
          <div className="text-2xl header-font text-neon flex items-center gap-2">
            <Terminal className="w-5 h-5" />
            REALITY CHECK AI
          </div>
          <div className="pill text-neon border-neon/30">GLAZE FILTER: OFF</div>
          <div className="pill text-success border-success/30">TRUTH LEVEL: 100%</div>
        </div>
        <div className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest bg-white/5 px-2 py-1 border border-white/10">
          SESSION_ID: RX-9921 / STATUS: AGGRESSIVE
        </div>
      </header>

      {/* Content Grid */}
      <main className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        {/* Main Chat Area */}
        <section className="flex-[2] flex flex-col terminal-bg overflow-hidden relative min-h-[500px] lg:min-h-0">
          <div className="p-3 border-b border-line flex justify-between bg-zinc-900/50 text-[10px] font-bold uppercase tracking-tight shrink-0">
            <span>C:\USERS\BOT\CONVERSATION_LOG</span>
            <span className="text-neon/50">ENCRYPTED_TRUTH_PROTOCOL</span>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col min-h-0">
            <Chat />
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:w-80 flex flex-col gap-4 shrink-0">
          <div className="terminal-bg p-4 flex flex-col gap-4 lg:h-full">
            <div className="text-[10px] font-bold border-b border-line pb-2 text-zinc-500 uppercase tracking-widest">
              SYSTEM_MONITOR_V2
            </div>
            
            <StatusDisplay />

            <div className="space-y-2 mt-2">
              <div className="flex items-center justify-between p-2 bg-neon/5 border border-neon/20">
                <span className="text-[9px] font-bold uppercase text-neon">Reality_Check_Mod</span>
                <span className="text-[9px] font-bold text-success animate-pulse">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-white/5 border border-white/10">
                <span className="text-[9px] font-bold uppercase text-zinc-500">Criticism_Engine</span>
                <span className="text-[9px] font-bold text-success">ONLINE</span>
              </div>
            </div>

            <div className="mt-auto pt-4 border-t border-line space-y-2">
              <div className="text-[10px] font-bold text-neon uppercase">USER ATTENTION</div>
              <div className="text-xl font-bold tracking-tighter text-white">LOW_EFFORT</div>
              <div className="h-1 bg-zinc-800 w-full overflow-hidden">
                <div className="h-full bg-neon w-[14%]" />
              </div>
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="text-[10px] text-zinc-600 flex justify-between uppercase tracking-tighter pt-2 border-t border-line">
        <span>© 2024 BRUTAL_AI_V1.0.4</span>
        <span>// NO GLAZE // NO LIES // ONLY REALITY</span>
      </footer>
    </div>
  );
}
