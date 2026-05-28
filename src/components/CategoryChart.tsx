import { useGetCategorySummary } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

export default function CategoryChart() {
  const { data: categoryData, isLoading } = useGetCategorySummary();

  if (isLoading || !categoryData) return null;

  return (
    <Card className="border-border/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-sm font-medium font-mono tracking-wider text-muted-foreground">CATEGORY BREAKDOWN</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="total"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color || `hsl(var(--chart-${(index % 5) + 1}))`} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ backgroundColor: 'hsl(var(--card))', borderColor: 'hsl(var(--border))', borderRadius: '8px' }}
                itemStyle={{ fontFamily: 'var(--app-font-mono)' }}
                formatter={(value: number) => `$${value}`}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
