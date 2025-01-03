import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Brain } from "lucide-react";

interface SummaryProps {
  summary: string;
  onSummaryChange: (value: string) => void;
  onReset: () => void;
}

const Summary: React.FC<SummaryProps> = ({ summary, onSummaryChange, onReset }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      toast({
        title: "Sumário copiado!",
        description: "O texto foi copiado para a área de transferência.",
      });
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o texto.",
        variant: "destructive",
      });
    }
  };

  const handleResetAndScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onReset();
  };

  return (
    <div className="w-full space-y-4 p-4">
      <h2 className="text-xl font-semibold text-gray-800">Sumário</h2>
      <Textarea
        value={summary}
        onChange={(e) => onSummaryChange(e.target.value)}
        className="min-h-[200px] w-full p-2"
        placeholder="O sumário será gerado automaticamente conforme você preenche o formulário..."
      />
      <div className="flex gap-4 justify-end">
        <Button variant="outline" onClick={handleResetAndScrollTop}>
          Resetar Formulário
        </Button>
        <Button onClick={handleCopy}>
          Copiar Sumário
        </Button>
        <Button disabled variant="outline" className="gap-2">
          <Brain className="h-4 w-4" />
          Análise IA (em breve)
        </Button>
      </div>
    </div>
  );
};

export default Summary;