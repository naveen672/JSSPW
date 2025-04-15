import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { 
  Users, 
  Bell, 
  Calendar, 
  MessageSquare,
  ArrowUp,
  UserPlus,
  EyeIcon
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AdminLayout from "@/components/admin/AdminLayout";
import { useToast } from "@/hooks/use-toast";

type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    isPositive: boolean;
  };
};

function StatCard({ title, value, description, icon, trend }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        {trend && (
          <div className="flex items-center gap-1 mt-2">
            <span className={trend.isPositive ? "text-green-500" : "text-red-500"}>
              {trend.isPositive ? (
                <ArrowUp className="h-3 w-3" />
              ) : (
                <ArrowUp className="h-3 w-3 transform rotate-180" />
              )}
            </span>
            <span className={`text-xs ${trend.isPositive ? "text-green-500" : "text-red-500"}`}>
              {trend.value}% {trend.isPositive ? "increase" : "decrease"}
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const { toast } = useToast();
  const [visitorCount, setVisitorCount] = useState<number>(0);
  
  const { data: facultyData, isLoading: isFacultyLoading } = useQuery({
    queryKey: ["/api/admin/faculty"],
    retry: false,
    onError: (error: Error) => {
      toast({
        title: "Error loading faculty data",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const { data: flashNewsData, isLoading: isFlashNewsLoading } = useQuery({
    queryKey: ["/api/admin/flash-news"],
    retry: false,
    onError: (error: Error) => {
      toast({
        title: "Error loading flash news",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const { data: eventsData, isLoading: isEventsLoading } = useQuery({
    queryKey: ["/api/admin/events"],
    retry: false,
    onError: (error: Error) => {
      toast({
        title: "Error loading events",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  const { data: messagesData, isLoading: isMessagesLoading } = useQuery({
    queryKey: ["/api/admin/contact-messages"],
    retry: false,
    onError: (error: Error) => {
      toast({
        title: "Error loading messages",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  useEffect(() => {
    // Get visitor count
    fetch('/api/visitors/count')
      .then(res => res.json())
      .then(data => setVisitorCount(data.count))
      .catch(error => console.error('Error fetching visitor count:', error));
  }, []);
  
  // Calculate unread messages
  const unreadMessages = messagesData?.filter(message => !message.isRead)?.length ?? 0;
  
  // Get active flash news count
  const activeFlashNews = flashNewsData?.filter(news => news.active)?.length ?? 0;
  
  // Get upcoming events (events in the future)
  const activeEvents = eventsData?.filter(event => event.active)?.length ?? 0;
  
  return (
    <AdminLayout>
      <div>
        <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
        <p className="text-muted-foreground mb-6">Welcome to the admin portal</p>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Faculty Members"
            value={facultyData?.length ?? 0}
            description="Total faculty profiles"
            icon={<Users className="h-4 w-4" />}
          />
          <StatCard
            title="Flash News"
            value={activeFlashNews}
            description={`Active announcements (${flashNewsData?.length ?? 0} total)`}
            icon={<Bell className="h-4 w-4" />}
          />
          <StatCard
            title="Events"
            value={activeEvents}
            description={`Active events (${eventsData?.length ?? 0} total)`}
            icon={<Calendar className="h-4 w-4" />}
          />
          <StatCard
            title="Messages"
            value={unreadMessages}
            description={`Unread messages (${messagesData?.length ?? 0} total)`}
            icon={<MessageSquare className="h-4 w-4" />}
          />
        </div>
        
        <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 mt-6">
          <Card className="col-span-1">
            <CardHeader>
              <CardTitle>Website Stats</CardTitle>
              <CardDescription>Current website statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-500">
                      <EyeIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Visitor Count</div>
                      <div className="text-xs text-muted-foreground">Total website visits</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">{visitorCount}</div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center text-purple-500">
                      <UserPlus className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium">Admin Users</div>
                      <div className="text-xs text-muted-foreground">Total admin accounts</div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold">1</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common admin tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="flex items-center gap-2" asChild>
                  <a href="/admin/faculty/new">
                    <UserPlus className="h-4 w-4" />
                    <span>Add Faculty</span>
                  </a>
                </Button>
                <Button className="flex items-center gap-2" asChild>
                  <a href="/admin/flash-news/new">
                    <Bell className="h-4 w-4" />
                    <span>Add Flash News</span>
                  </a>
                </Button>
                <Button className="flex items-center gap-2" asChild>
                  <a href="/admin/events/new">
                    <Calendar className="h-4 w-4" />
                    <span>Add Event</span>
                  </a>
                </Button>
                <Button className="flex items-center gap-2" asChild>
                  <a href="/admin/messages">
                    <MessageSquare className="h-4 w-4" />
                    <span>View Messages</span>
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}