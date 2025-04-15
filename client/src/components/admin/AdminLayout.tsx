import { ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  Bell, 
  Calendar, 
  LogOut, 
  Menu,
  ChevronDown,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import smallLogo from "@assets/smalllogo1.png";

type NavItemProps = {
  href: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
  isMobile?: boolean;
};

function NavItem({ href, icon, label, isActive, isMobile = false }: NavItemProps) {
  const baseClasses = "flex items-center gap-3 rounded-md px-3 py-2 transition-colors";
  const activeClasses = isActive 
    ? "bg-primary text-primary-foreground font-medium" 
    : "hover:bg-muted";
  const mobileClasses = isMobile ? "w-full" : "";
  
  return (
    <Link href={href}>
      <a className={`${baseClasses} ${activeClasses} ${mobileClasses}`}>
        {icon}
        <span>{label}</span>
      </a>
    </Link>
  );
}

type AdminLayoutProps = {
  children: ReactNode;
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [location] = useLocation();
  const { user, logoutMutation } = useAuth();
  
  const handleLogout = () => {
    logoutMutation.mutate();
  };
  
  const navItems = [
    { href: "/admin/dashboard", icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { href: "/admin/faculty", icon: <Users size={20} />, label: "Faculty" },
    { href: "/admin/flash-news", icon: <Bell size={20} />, label: "Flash News" },
    { href: "/admin/events", icon: <Calendar size={20} />, label: "Events" },
    { href: "/admin/messages", icon: <FileText size={20} />, label: "Messages" },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Mobile Header */}
      <header className="lg:hidden border-b bg-white dark:bg-gray-900 px-4 py-3 sticky top-0 z-10">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img src={smallLogo} alt="JSS Logo" className="h-8 mr-2" />
            <span className="font-semibold">JSS Admin</span>
          </div>
          
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="flex items-center">
                  <User size={18} className="mr-2" />
                  <span className="hidden sm:inline-block">{user?.username}</span>
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/">
                    <a className="flex items-center cursor-pointer w-full">View Website</a>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut size={16} className="mr-2" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>JSS Polytechnic for Women</SheetTitle>
                  <SheetDescription>Admin Portal Navigation</SheetDescription>
                </SheetHeader>
                <div className="mt-6 flex flex-col gap-4">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.href}
                      href={item.href}
                      icon={item.icon}
                      label={item.label}
                      isActive={location === item.href}
                      isMobile
                    />
                  ))}
                  <Button variant="destructive" className="mt-4" onClick={handleLogout}>
                    <LogOut size={16} className="mr-2" />
                    <span>Logout</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      
      {/* Desktop Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-64 border-r bg-white dark:bg-gray-900 min-h-screen fixed top-0 left-0">
          <div className="p-4 border-b">
            <div className="flex items-center">
              <img src={smallLogo} alt="JSS Logo" className="h-10 mr-3" />
              <div>
                <h1 className="font-semibold text-lg">JSS Polytechnic</h1>
                <p className="text-xs text-muted-foreground">Admin Portal</p>
              </div>
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  icon={item.icon}
                  label={item.label}
                  isActive={location === item.href}
                />
              ))}
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="w-full justify-start">
                    <User size={16} className="mr-2" />
                    <span className="text-sm">{user?.username}</span>
                    <ChevronDown size={14} className="ml-auto" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/">
                      <a className="flex items-center cursor-pointer w-full">View Website</a>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut size={16} className="mr-2" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 lg:ml-64 min-h-screen">
          <div className="container mx-auto p-4 md:p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}