import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import NotFound from "@/pages/not-found";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Ensure splash screen is visible for at least 3 seconds
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Mark the page as loaded
    window.addEventListener('load', () => setIsLoading(false));

    if (document.readyState === 'complete') {
      setIsLoading(false);
    }

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', () => setIsLoading(false));
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <NewsTicker />
          <main className="pt-[140px] lg:pt-[140px]">
            <Router />
          </main>
          <Footer />
          <BackToTop />
        </>
      )}
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
