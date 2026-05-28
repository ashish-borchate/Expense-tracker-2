import { useGetTransactions, useDeleteTransaction, getGetTransactionsQueryKey, getGetSummaryQueryKey, getGetEmergencyFundQueryKey } from "@workspace/api-client-react";
import { useQueryClient } from "@tanstack/react-query";
import { useSoundSystem } from "../hooks/useSoundSystem";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";

export default function TransactionList() {
  const { data: transactions, isLoading } = useGetTransactions();
  const deleteMutation = useDeleteTransaction();
  const queryClient = useQueryClient();
  const { play } = useSoundSystem();

  if (isLoading || !transactions) return null;

  const handleDelete = (id: number) => {
    play('UI_CLICK');
    deleteMutation.mutate({ id }, {
      onSuccess: () => {
        play('FINANCIAL_ALERT');
        queryClient.invalidateQueries({ queryKey: getGetTransactionsQueryKey() });
        queryClient.invalidateQueries({ queryKey: getGetSummaryQueryKey() });
        queryClient.invalidateQueries({ queryKey: getGetEmergencyFundQueryKey() });
      }
    });
  };

  return (
    <Card className="border-border/50 shadow-[0_0_20px_rgba(59,130,246,0.05)] bg-card/50 backdrop-blur">
      <CardHeader>
        <CardTitle className="text-sm font-medium font-mono tracking-wider text-muted-foreground">RECENT TRANSACTIONS</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.slice(0, 10).map((tx) => (
            <div key={tx.id} className="flex items-center justify-between border-b border-border/50 pb-2 last:border-0">
              <div className="flex flex-col">
                <span className="text-sm font-medium">{tx.description}</span>
                <span className="text-xs text-muted-foreground font-mono">{new Date(tx.createdAt).toLocaleDateString()} &bull; {tx.categoryName}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className={`font-mono font-bold ${tx.type === 'deposit' ? 'text-emerald-500' : 'text-foreground'}`}>
                  {tx.type === 'deposit' ? '+' : '-'}${tx.amount.toLocaleString()}
                </span>
                <Button variant="ghost" size="icon" onClick={() => handleDelete(tx.id)} className="h-8 w-8 hover:bg-destructive/10 hover:text-destructive text-muted-foreground">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
