import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, SunMoon, GitBranch, Eye, ListTree } from "lucide-react";

interface HelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * A controlled dialog component that provides help and information about the dashboard features.
 */
export const HelpDialog = ({ open, onOpenChange }: HelpDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajuda / Sobre o Dashboard</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-start gap-4">
            <Search className="h-6 w-6 mt-1 text-green-500" />
            <div>
              <h3 className="font-semibold">Barra de Busca</h3>
              <p className="text-sm text-muted-foreground">
                Digite palavras-chave para filtrar os artigos e os temas no Mapa Mental em tempo real.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <ListTree className="h-6 w-6 mt-1 text-orange-500" />
            <div>
              <h3 className="font-semibold">Navegador de Temas</h3>
              <p className="text-sm text-muted-foreground">
                Explore os artigos organizados por categorias. Clique em um tema para ver a lista de artigos ou expandir seus sub-temas.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Eye className="h-6 w-6 mt-1 text-purple-500" />
            <div>
              <h3 className="font-semibold">Visualizador de Artigos</h3>
              <p className="text-sm text-muted-foreground">
                Quando um artigo é selecionado, seu conteúdo, resumo e informações relacionadas aparecem aqui. Clique no título para abri-lo no blog original.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <GitBranch className="h-6 w-6 mt-1 text-blue-500" />
            <div>
              <h3 className="font-semibold">Mapa Mental (Mindmap)</h3>
              <p className="text-sm text-muted-foreground">
                Navegue pelos temas e artigos de forma visual. Clique em um nó (círculo) para expandir ou recolher temas e para selecionar um artigo.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <SunMoon className="h-6 w-6 mt-1 text-yellow-500" />
            <div>
              <h3 className="font-semibold">Alternador de Tema</h3>
              <p className="text-sm text-muted-foreground">
                O tema visual (claro/escuro) se ajusta automaticamente à configuração do seu sistema operacional.
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};