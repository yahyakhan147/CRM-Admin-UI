import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

/**
 * `data` should be in order. Give each point a `phase` of "interested" or
 * "confirmed" — the point where the phase switches is repeated on both
 * series so the two colored segments connect with no gap.
 */
const defaultData = [
  { date: "Apr 11", interested: 0, confirmed: null },
  { date: "Apr 18", interested: 1, confirmed: null },
  { date: "Apr 28", interested: 1, confirmed: 1 }, // crossover point
  { date: "May 15", interested: null, confirmed: 0.3 },
  { date: "May 25", interested: null, confirmed: 1 },
  { date: "May 29", interested: null, confirmed: 1 },
];

function Dot({ cx, cy, stroke, payload, dataKey }) {
  // Only draw a dot where this series actually has a value
  if (payload[dataKey] === null || payload[dataKey] === undefined) return null;
  return <circle cx={cx} cy={cy} r={5} fill={stroke} stroke="white" strokeWidth={1.5} />;
}

export default function TrendAnalysis({ data = defaultData }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-[0_10px_40px_-12px_rgba(30,64,175,0.12)] dark:bg-slate-900 dark:shadow-[0_10px_40px_-12px_rgba(2,6,23,0.7)] sm:p-8">
      <h2 className="text-base font-semibold text-[#0a2258] dark:text-slate-100">
        Trend Analysis - Interested &amp; Confirmed
      </h2>

      <div className="mt-6 h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 12, left: -12, bottom: 0 }}>
            <CartesianGrid vertical={false} stroke="#334155" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#cbd5e1", fontSize: 12 }}
              dy={8}
            />
            <YAxis
              domain={[0, 4]}
              ticks={[0, 1, 2, 3, 4]}
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#cbd5e1", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                borderRadius: 12,
                border: "1px solid #334155",
                backgroundColor: "#0f172a",
                color: "#e2e8f0",
                boxShadow: "0 10px 30px -10px rgba(2,6,23,0.7)",
              }}
            />
            <Line
              type="linear"
              dataKey="interested"
              stroke="#22c55e"
              strokeWidth={3}
              dot={<Dot />}
              activeDot={{ r: 6 }}
              connectNulls
              name="Interested"
            />
            <Line
              type="linear"
              dataKey="confirmed"
              stroke="#f5811f"
              strokeWidth={3}
              dot={<Dot />}
              activeDot={{ r: 6 }}
              connectNulls
              name="Confirmed"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}