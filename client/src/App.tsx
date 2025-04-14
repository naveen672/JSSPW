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
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      {showSplash ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <NewsTicker />
          <main className="pt-[108px] lg:pt-[116px]">
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
