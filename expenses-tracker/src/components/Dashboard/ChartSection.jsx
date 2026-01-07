import RevenueChart from "./RevneueChart";
import SalesChart from "./SalesChart";

function ChartSection(params) {
  return <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
    <div className="xl:col-span-1">
        <RevenueChart />
    </div>
    <div className="space-y-6">
        {/* sales chart */}
        <SalesChart/>
    </div>
  </div>;
}
export default ChartSection;
