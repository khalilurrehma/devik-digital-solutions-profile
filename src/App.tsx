import { Toaster }                         from "@/components/ui/toaster";
import { Toaster as Sonner }                from "@/components/ui/sonner";
import { TooltipProvider }                  from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider }                   from "react-helmet-async";
import { Outlet }                           from "react-router-dom";

const queryClient = new QueryClient();

/**
 * Pure provider wrapper.
 * Routing + AppShell layout are handled via src/routes.tsx + vite-react-ssg.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Outlet />
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
