import ChartSection from "./ChartSection";
import StatsGrid from "./StatsGrid";
function Dashboard() {
  return (
    <>
      <div className="space-y-6">
        {/* stats grid */}
        <StatsGrid />
        <ChartSection />
      </div>
    </>
  );
}

export default Dashboard;
