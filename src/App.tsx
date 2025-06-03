
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Readme from "./pages/Readme";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import Predictor from "./pages/Predictor";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopBar } from "@/components/TopBar";
import { ChatBotButton } from "@/components/ChatBotButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/readme" element={<Readme />} />
          <Route path="/dashboard/*" element={
            <SidebarProvider>
              <div className="min-h-screen flex w-full">
                <AppSidebar />
                <main className="flex-1 flex flex-col">
                  <TopBar />
                  <div className="flex-1 p-6">
                    <Routes>
                      <Route index element={<Dashboard />} />
                      <Route path="matches" element={<Matches />} />
                      <Route path="predictor" element={<Predictor />} />
                      <Route path="analytics" element={<Analytics />} />
                      <Route path="settings" element={<Settings />} />
                    </Routes>
                  </div>
                </main>
                <ChatBotButton />
              </div>
            </SidebarProvider>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
