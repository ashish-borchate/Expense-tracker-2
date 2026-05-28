import { useGetSummary } from "@workspace/api-client-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Activity, ArrowDownRight, ArrowUpRight, Wallet } from "lucide-react";

export default function SummaryCards() {
  const { data: summary, isLoading } = useGetSummary();

  if (isLoading || !summary) {
    return null;
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-border/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] bg-card/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium font-mono tracking-wider text-muted-foreground">TOTAL BALANCE</CardTitle>
          <Wallet className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono text-foreground">${summary.totalBalance.toLocaleString()}</div>
        </CardContent>
      </Card>
      
      <Card className="border-border/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] bg-card/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium font-mono tracking-wider text-muted-foreground">TOTAL INCOME</CardTitle>
          <ArrowUpRight className="h-4 w-4 text-emerald-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono text-emerald-500">+${summary.totalIncome.toLocaleString()}</div>
        </CardContent>
      </Card>

      <Card className="border-border/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] bg-card/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium font-mono tracking-wider text-muted-foreground">TOTAL EXPENSES</CardTitle>
          <ArrowDownRight className="h-4 w-4 text-destructive" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono text-destructive">-${summary.totalExpenses.toLocaleString()}</div>
        </CardContent>
      </Card>

      <Card className="border-border/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] bg-card/50 backdrop-blur">
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium font-mono tracking-wider text-muted-foreground">SAVINGS RATE</CardTitle>
          <Activity className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold font-mono text-foreground">{summary.savingsRate}%</div>
        </CardContent>
      </Card>
    </div>
  );
}
