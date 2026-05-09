import type { RouteObject } from "react-router-dom";
import { Outlet, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider }                  from "@/components/ui/tooltip";
import { Toaster }                          from "@/components/ui/toaster";
import { Toaster as Sonner }                from "@/components/ui/sonner";
import AppShell from "./AppShell";

// Static imports so SSG renderToString gets the full tree (React.lazy suspends during SSR)
import Index           from "./pages/Index";
import BookPage        from "./pages/Book";
import WorkPage        from "./pages/Work";
import PricingFullPage from "./pages/Pricing";
import ContactFullPage from "./pages/Contact";
import ThankYouPage    from "./pages/ThankYou";
import InsightArticle  from "./pages/InsightArticle";
import PrivacyPage     from "./pages/Privacy";
import TermsPage       from "./pages/Terms";
import DataDeletionPage from "./pages/DataDeletion";
import NotFound        from "./pages/NotFound";

const queryClient = new QueryClient();

// Catches vite-react-ssg static-loader fetch errors (e.g. stale hash after
// a redeployment) and silently falls through so the page still renders.
const RouteErrorBoundary = () => {
  const error = useRouteError();
  // If it's a real 404-status error, show NotFound. Otherwise just render
  // the child outlet — the pre-rendered HTML content is already on screen.
  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }
  return <Outlet />;
};

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppShell>
        <Outlet />
      </AppShell>
    </TooltipProvider>
  </QueryClientProvider>
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <RouteErrorBoundary />,
    children: [
      { index: true,  element: <Index /> },
      { path: "book",     element: <BookPage /> },
      { path: "work",     element: <WorkPage /> },
      { path: "pricing",  element: <PricingFullPage /> },
      { path: "contact",  element: <ContactFullPage /> },
      { path: "thank-you", element: <ThankYouPage /> },
      { path: "insights/multi-tenant-saas-architecture", element: <InsightArticle /> },
      { path: "privacy", element: <PrivacyPage /> },
      { path: "terms", element: <TermsPage /> },
      { path: "data-deletion", element: <DataDeletionPage /> },
    ],
  },
  { path: "*", element: <NotFound /> },
];
