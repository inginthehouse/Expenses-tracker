import { ArrowDownRight, ArrowUpRight, DollarSign, Users } from "lucide-react";

const stats = [
  {
    title: "Total Revenue",
    value: "$1234",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-500/10 dark:bg-emerald-900/20",
    textColor: "text-emerald-500 dark:text-emerald-400",
  },
  {
    title: "Total Expenses",
    value: "$567",
    change: "-8.3%",
    trend: "down",
    icon: Users,
    color: "from-blie-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-500 dark:text-blue-400",
  },
];
function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6
      border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20
      dark:hover:shadow-slate-900/20 transition-all duration-300 group">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">
                {stat.title}
              </p>
              <p className="text-3xl font-bold text-slate-800 dark:text-white mb-4">
                {stat.value}
              </p>
              <div className="flex items-center space-x-2">
                {stat.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4 text-emerald-500" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 text-red-500" />
                )}

                <span
                  className={`text-sm font-semibold ${
                    stat.trend === "up" ? "text-emerald-500" : "text-red-500"
                  }`}>
                  {stat.change}
                </span>
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  vs Last month
                </span>
              </div>
            </div>
            <div
              className={`p-3 rounded-xl group-hover:scale-110 tracking-all duration-300 ${stat.bgColor}`}>
              {<stat.icon className={`w-6 h-6 ${stat.textColor}`} />}
            </div>
          </div>
          {/* progressbar */}
          <div className="mt-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${stat.color} rounded-full transition-all duration-100`}
              style={{width: stat.trend === "up" ? "75%" : "45%"}}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsGrid;
