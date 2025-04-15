import { useState, useEffect, lazy, Suspense } from "react";
import { Switch, Route, useLocation } from "wouter";
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
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "@/lib/protected-route";

// Loading component
const PageLoading = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#0A2463]"></div>
  </div>
);

// Simple component to render routes without type errors
const RouteRenderer = ({ component: Component }: { component: React.ComponentType }) => {
  return <Component />;
};

// Helper function for lazy loading components with proper path handling
const createLazyRoute = (path: string) => {
  // Map the path to an actual import based on path pattern
  const getComponent = () => {
    if (path.startsWith('./pages/programs/')) {
      const componentName = path.replace('./pages/programs/', '');
      switch (componentName) {
        case 'Architecture': return import('./pages/programs/Architecture');
        case 'ApparelDesign': return import('./pages/programs/ApparelDesign');
        case 'CommercialPractice': return import('./pages/programs/CommercialPractice');
        case 'ComputerScience': return import('./pages/programs/ComputerScience');
        case 'ElectronicsCommunication': return import('./pages/programs/ElectronicsCommunication');
        case 'ElectronicsInstrumentation': return import('./pages/programs/ElectronicsInstrumentation');
        case 'InteriorDesign': return import('./pages/programs/InteriorDesign');
        case 'InformationScience': return import('./pages/programs/InformationScience');
      }
    } else if (path.startsWith('./pages/supports/')) {
      const componentName = path.replace('./pages/supports/', '');
      switch (componentName) {
        case 'IIICell': return import('./pages/supports/IIICell');
        case 'Hostel': return import('./pages/supports/Hostel');
        case 'Library': return import('./pages/supports/Library');
        case 'NSS': return import('./pages/supports/NSS');
        case 'NCC': return import('./pages/supports/NCC');
        case 'ISTEChapter': return import('./pages/supports/ISTEChapter');
        case 'CommunityDevelopment': return import('./pages/supports/CommunityDevelopment');
      }
    } else if (path.startsWith('./pages/circulars/')) {
      const componentName = path.replace('./pages/circulars/', '');
      switch (componentName) {
        case 'AcademicCalendar': return import('./pages/circulars/AcademicCalendar');
        case 'Exam': return import('./pages/circulars/Exam');
        case 'Scholarship': return import('./pages/circulars/Scholarship');
        case 'IIICell': return import('./pages/circulars/IIICell');
        case 'NCC': return import('./pages/circulars/NCC');
        case 'NSS': return import('./pages/circulars/NSS');
        case 'Cultural': return import('./pages/circulars/Cultural');
        case 'Sports': return import('./pages/circulars/Sports');
        case 'Alumni': return import('./pages/circulars/Alumni');
        case 'Hostel': return import('./pages/circulars/Hostel');
      }
    } else if (path.startsWith('./pages/')) {
      const componentName = path.replace('./pages/', '');
      switch (componentName) {
        case 'Admission': return import('./pages/Admission');
        case 'Exams': return import('./pages/Exams');
        case 'Alumni': return import('./pages/Alumni');
      }
    }
    
    // Default to not found
    console.error(`Failed to load component for path: ${path}`);
    return import('./pages/not-found');
  };
  
  const LazyComponent = lazy(getComponent);
  
  return () => (
    <Suspense fallback={<PageLoading />}>
      <LazyComponent />
    </Suspense>
  );
};

// AdminRouter - handles admin routes separately with a different layout
function AdminRouter() {
  // Load admin components
  const AdminLogin = lazy(() => import('./pages/admin/Login'));
  const AdminDashboard = lazy(() => import('./pages/admin/Dashboard'));
  const FacultyPage = lazy(() => import('./pages/admin/FacultyPage'));
  const FlashNewsPage = lazy(() => import('./pages/admin/FlashNewsPage'));
  const MessagesPage = lazy(() => import('./pages/admin/MessagesPage'));
  const EventsPage = lazy(() => import('./pages/admin/EventsPage'));
  
  return (
    <Switch>
      <Route path="/admin/login" component={() => (
        <Suspense fallback={<PageLoading />}>
          <AdminLogin />
        </Suspense>
      )} />
      
      <ProtectedRoute
        path="/admin/dashboard"
        component={() => (
          <Suspense fallback={<PageLoading />}>
            <AdminDashboard />
          </Suspense>
        )}
        adminOnly
      />
      
      <ProtectedRoute
        path="/admin/faculty"
        component={() => (
          <Suspense fallback={<PageLoading />}>
            <FacultyPage />
          </Suspense>
        )}
        adminOnly
      />
      
      <ProtectedRoute
        path="/admin/flash-news"
        component={() => (
          <Suspense fallback={<PageLoading />}>
            <FlashNewsPage />
          </Suspense>
        )}
        adminOnly
      />
      
      <ProtectedRoute
        path="/admin/messages"
        component={() => (
          <Suspense fallback={<PageLoading />}>
            <MessagesPage />
          </Suspense>
        )}
        adminOnly
      />
      
      <ProtectedRoute
        path="/admin/events"
        component={() => (
          <Suspense fallback={<PageLoading />}>
            <EventsPage />
          </Suspense>
        )}
        adminOnly
      />
    </Switch>
  );
}

// MainRouter - handles main website routes
function MainRouter() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* About Us Pages */}
      <Route path="/jss-mahavidyapeetha" component={JSSMahavidyapeetha} />
      <Route path="/technical-education" component={TechnicalEducation} />
      <Route path="/about-college" component={AboutCollege} />
      
      {/* Programs Pages */}
      <Route path="/programs/architecture">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/Architecture')} />}
      </Route>
      <Route path="/programs/apparel-design">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/ApparelDesign')} />}
      </Route>
      <Route path="/programs/commercial-practice">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/CommercialPractice')} />}
      </Route>
      <Route path="/programs/computer-science">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/ComputerScience')} />}
      </Route>
      <Route path="/programs/electronics-communication">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/ElectronicsCommunication')} />}
      </Route>
      <Route path="/programs/electronics-instrumentation">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/ElectronicsInstrumentation')} />}
      </Route>
      <Route path="/programs/interior-design">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/InteriorDesign')} />}
      </Route>
      <Route path="/programs/information-science">
        {() => <RouteRenderer component={createLazyRoute('./pages/programs/InformationScience')} />}
      </Route>
      
      {/* Supports Pages */}
      <Route path="/supports/iii-cell">
        {() => <RouteRenderer component={createLazyRoute('./pages/supports/IIICell')} />}
      </Route>
      <Route path="/supports/hostel">
        {() => <RouteRenderer component={createLazyRoute('./pages/supports/Hostel')} />}
      </Route>
      <Route path="/supports/library">
        {() => <RouteRenderer component={createLazyRoute('./pages/supports/Library')} />}
      </Route>
      <Route path="/supports/nss">
        {() => <RouteRenderer component={createLazyRoute('./pages/supports/NSS')} />}
      </Route>
      <Route path="/supports/ncc">
        {() => <RouteRenderer component={createLazyRoute('./pages/supports/NCC')} />}
      </Route>
      <Route path="/supports/iste-chapter">
        {() => <RouteRenderer component={createLazyRoute('./pages/supports/ISTEChapter')} />}
      </Route>
      <Route path="/supports/community-development">
        {() => <RouteRenderer component={createLazyRoute('./pages/supports/CommunityDevelopment')} />}
      </Route>
      
      {/* Circulars Pages */}
      <Route path="/circulars/academic-calendar">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/AcademicCalendar')} />}
      </Route>
      <Route path="/circulars/exam">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/Exam')} />}
      </Route>
      <Route path="/circulars/scholarship">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/Scholarship')} />}
      </Route>
      <Route path="/circulars/iii-cell">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/IIICell')} />}
      </Route>
      <Route path="/circulars/ncc">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/NCC')} />}
      </Route>
      <Route path="/circulars/nss">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/NSS')} />}
      </Route>
      <Route path="/circulars/cultural">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/Cultural')} />}
      </Route>
      <Route path="/circulars/sports">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/Sports')} />}
      </Route>
      <Route path="/circulars/alumni">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/Alumni')} />}
      </Route>
      <Route path="/circulars/hostel">
        {() => <RouteRenderer component={createLazyRoute('./pages/circulars/Hostel')} />}
      </Route>
      
      {/* Other Main Pages */}
      <Route path="/admission">
        {() => <RouteRenderer component={createLazyRoute('./pages/Admission')} />}
      </Route>
      <Route path="/exams">
        {() => <RouteRenderer component={createLazyRoute('./pages/Exams')} />}
      </Route>
      <Route path="/alumni">
        {() => <RouteRenderer component={createLazyRoute('./pages/Alumni')} />}
      </Route>
      
      <Route component={NotFound} />
    </Switch>
  );
}

// Combined Router
function Router() {
  const [location] = useLocation();
  
  // Check if current path is an admin route
  const isAdminRoute = location.startsWith('/admin');
  
  if (isAdminRoute) {
    return <AdminRouter />;
  }
  
  return <MainRouter />;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showSplash, setShowSplash] = useState(true);
  const [location] = useLocation();
  const isAdminRoute = location.startsWith('/admin');

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
      <AuthProvider>
        <DarkModeProvider>
          {showSplash ? (
            <SplashScreen />
          ) : (
            <>
              {/* Show header/footer only for main website, not for admin routes */}
              {!isAdminRoute && (
                <div className="sticky top-0 z-40 bg-white dark:bg-gray-900 transition-colors duration-300">
                  <Header />
                  <NewsTicker />
                </div>
              )}
              <main className="dark:bg-gray-900 transition-colors duration-300">
                <Router />
              </main>
              {!isAdminRoute && (
                <>
                  <Footer />
                  <BackToTop />
                </>
              )}
            </>
          )}
          <Toaster />
        </DarkModeProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
