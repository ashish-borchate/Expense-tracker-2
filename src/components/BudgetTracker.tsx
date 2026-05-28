import { useGetBudget, useDeleteBudget, getGetBudgetQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { useSoundSystem } from "../hooks/useSoundSystem";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export default function BudgetTracker() {
  const { data: budgets, isLoading } = useGetBudget();
  const deleteMutation = useDeleteBudget();
  const queryClient = useQueryClient();
  const { play } = useSoundSystem();

  if (isLoading || !budgets) return null;

  const handleDelete = (id: number) => {
    play('UI_CLICK');
    deleteMutation.mutate({ id }, {
      onSuccess: () => {
        play('FINANCIAL_ALERT');
        queryClient.invalidateQueries({ queryKey: getGetBudgetQueryKey() });
      }
    });
  };

  return (
    <Card className="border-border/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-sm font-medium font-mono tracking-wider text-muted-foreground">BUDGET TRACKER</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgets.map((budget) => {
            const percentage = Math.min((budget.spent / budget.limit) * 100, 100);
            const isNearLimit = percentage > 85;
            const isOverLimit = percentage >= 100;
            
            return (
              <div key={budget.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{budget.categoryName}</span>
                    <span className="text-xs text-muted-foreground font-mono uppercase">{budget.period}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className={`font-mono text-sm font-bold ${isOverLimit ? 'text-destructive' : isNearLimit ? 'text-amber-500' : 'text-foreground'}`}>
                        ${budget.spent.toLocaleString()} <span className="text-xs text-muted-foreground font-normal">/ ${budget.limit.toLocaleString()}</span>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(budget.id)} className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive text-muted-foreground">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <Progress 
                  value={percentage} 
                  className={`h-2 ${isOverLimit ? 'bg-destructive/20' : isNearLimit ? 'bg-amber-500/20' : 'bg-muted'}`}
                  indicatorClassName={isOverLimit ? 'bg-destructive' : isNearLimit ? 'bg-amber-500' : 'bg-primary'}
                />
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
