import { useGetEmergencyFund } from "@workspace/api-client-react";
import { Progress } from "./ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Shield } from "lucide-react";

export default function EmergencyFundCard() {
  const { data: emergencyFund, isLoading } = useGetEmergencyFund();

  if (isLoading || !emergencyFund) {
    return (
      <Card className="border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.05)]">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium font-mono text-amber-500">
            EMERGENCY FUND
          </CardTitle>
          <Shield className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="h-4 bg-muted animate-pulse rounded" />
        </CardContent>
      </Card>
    );
  }

  const progress = Math.min((emergencyFund.currentAmount / emergencyFund.targetAmount) * 100, 100);

  return (
    <Card className="border-amber-500/30 shadow-[0_0_20px_rgba(245,158,11,0.1)] bg-card/50 backdrop-blur">
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium font-mono tracking-wider text-amber-500">
          EMERGENCY FUND
        </CardTitle>
        <Shield className="h-4 w-4 text-amber-500" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold font-mono text-foreground mb-2">
          ${emergencyFund.currentAmount.toLocaleString()} <span className="text-sm text-muted-foreground">/ ${emergencyFund.targetAmount.toLocaleString()}</span>
        </div>
        <Progress value={progress} className="h-2 bg-muted mb-2" />
        <p className="text-xs text-muted-foreground font-mono">
          {emergencyFund.monthsCovered} Months Covered | {progress.toFixed(1)}% to Target
        </p>
      </CardContent>
    </Card>
  );
}
