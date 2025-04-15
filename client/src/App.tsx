import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/Home";
import JSSMahavidyapeetha from "@/pages/JSSMahavidyapeetha";
import TechnicalEducation from "@/pages/TechnicalEducation";
import AboutCollege from "@/pages/AboutCollege";
import NotFound from "@/pages/not-found";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import NewsTicker from "@/components/NewsTicker";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { DarkModeProvider } from "@/lib/DarkModeContext";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/jss-mahavidyapeetha" component={JSSMahavidyapeetha} />
      <Route path="/technical-education" component={TechnicalEducation} />
      <Route path="/about-college" component={AboutCollege} />
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
      <DarkModeProvider>
        {showSplash ? (
          <SplashScreen />
        ) : (
          <>
            <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 transition-colors duration-300">
              <Header />
              <NewsTicker />
            </div>
            <main className="dark:bg-gray-900 transition-colors duration-300">
              <Router />
            </main>
            <Footer />
            <BackToTop />
          </>
        )}
        <Toaster />
      </DarkModeProvider>
    </QueryClientProvider>
  );
}

export default App;
