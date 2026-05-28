import { useCinematicLifecycle } from "@/hooks/useCinematicLifecycle";
import CinematicIntro from "@/components/CinematicIntro";
import EmergencyFundCard from "@/components/EmergencyFundCard";
import SummaryCards from "@/components/SummaryCards";
import MonthlyChart from "@/components/MonthlyChart";
import CategoryChart from "@/components/CategoryChart";
import TransactionList from "@/components/TransactionList";
import BudgetTracker from "@/components/BudgetTracker";

export default function Dashboard() {
  const { state, onAircraftLandingComplete } = useCinematicLifecycle();

  const isHidden = state === "BOOTING" || state === "AIRPORT_SCENE" || state === "FLIGHT" || state === "LANDING";
  
  return (
    <>
      <CinematicIntro state={state} onLandingComplete={onAircraftLandingComplete} />
      
      <div className={`min-h-screen bg-background p-6 transition-opacity duration-1000 ${isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <div className="mx-auto max-w-7xl space-y-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-mono text-primary font-bold tracking-widest uppercase">FINANCIAL SYSTEM ONLINE</h1>
            
            {/* Staggered Reveal */}
            <div className={`transition-all duration-700 ${state === 'REVEAL' || state === 'READY' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <EmergencyFundCard />
            </div>

            <div className={`transition-all duration-700 delay-300 ${state === 'REVEAL' || state === 'READY' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <SummaryCards />
            </div>

            <div className={`grid gap-6 md:grid-cols-2 transition-all duration-700 delay-500 ${state === 'REVEAL' || state === 'READY' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <MonthlyChart />
              <CategoryChart />
            </div>

            <div className={`grid gap-6 md:grid-cols-2 transition-all duration-700 delay-700 ${state === 'REVEAL' || state === 'READY' ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <BudgetTracker />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}