
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route } from "wouter";
import Index from "./pages/Index";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ColorThemeProvider } from "./contexts/ColorThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <ColorThemeProvider>
          <Toaster />
          <Sonner />
          <Route path="/" component={Index} />
        </ColorThemeProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
