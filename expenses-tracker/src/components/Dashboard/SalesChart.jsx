import { ResponsiveContainer, PieChart, Pie, Tooltip, Cell } from "recharts";

function SalesChart() {
  const data = [
    { category: "Electronics", value: 40, color: "#6366f1" },
    { category: "Clothing", value: 30, color: "#10b981" },
    { category: "Home & Kitchen", value: 15, color: "#f59e0b" },
    { category: "Books", value: 15, color: "#ef4444" },
  ];
  return (
    <div className="bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-xl p-6 borderborder-slate-200/50 dard:border-slate-700/50">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">
          Sales by catagory
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Production distribution
        </p>
      </div>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.1)",
                color: "#000",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-sce space-x-3">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}></div>
              <span className="text-sm text-slate-600 dark:text-slate-400">
                {item.category}
              </span>
            </div>
            <div className="text-sm font-semibold text-slate-800 dark:text-white">
                {item.value}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default SalesChart;
