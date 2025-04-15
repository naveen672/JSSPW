import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { useState } from "react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Loader2, Eye, MailOpen, Mail, Trash2, Send, MessageSquare } from "lucide-react";
import { ContactMessage } from "@shared/schema";

export default function MessagesPage() {
  const { toast } = useToast();
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [isMessageDialogOpen, setIsMessageDialogOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  
  // Fetch messages
  const { data: messagesData, isLoading } = useQuery<ContactMessage[]>({
    queryKey: ["/api/admin/contact-messages"],
  });
  
  // Mark as read mutation
  const markAsReadMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/contact-messages/${id}/read`, {
        method: "PATCH",
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to mark message as read");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Message marked as read",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contact-messages"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const response = await fetch(`/api/admin/contact-messages/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete message");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Message deleted successfully",
      });
      setIsMessageDialogOpen(false);
      queryClient.invalidateQueries({ queryKey: ["/api/admin/contact-messages"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Handle view message
  const handleViewMessage = (message: ContactMessage) => {
    setSelectedMessage(message);
    setIsMessageDialogOpen(true);
    
    // If message is unread, mark it as read
    if (!message.isRead) {
      markAsReadMutation.mutate(message.id);
    }
  };
  
  // Handle delete message
  const handleDeleteMessage = (id: number) => {
    deleteMutation.mutate(id);
  };
  
  // Handle send reply (this would be implemented in a real app)
  const handleSendReply = (email: string) => {
    // Open default email client
    window.open(`mailto:${email}`);
  };
  
  // Filter messages based on tab
  const filteredMessages = messagesData?.filter((message) => {
    if (activeTab === "unread") return !message.isRead;
    return true; // "all" tab
  });
  
  // Calculate counts for tabs
  const unreadCount = messagesData?.filter((message) => !message.isRead).length || 0;
  const totalCount = messagesData?.length || 0;
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Messages</h1>
          <p className="text-muted-foreground">
            View and manage contact form submissions
          </p>
        </div>
        
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <CardTitle>Contact Messages</CardTitle>
                <CardDescription>
                  Messages from visitors through the contact form
                </CardDescription>
              </div>
              
              <Tabs 
                defaultValue="all" 
                value={activeTab} 
                onValueChange={setActiveTab}
                className="mt-4 md:mt-0"
              >
                <TabsList>
                  <TabsTrigger value="all">
                    All
                    <Badge variant="outline" className="ml-2">{totalCount}</Badge>
                  </TabsTrigger>
                  <TabsTrigger value="unread">
                    Unread
                    <Badge className="ml-2">{unreadCount}</Badge>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <Table>
                <TableCaption>
                  Showing {filteredMessages?.length || 0} of {totalCount} total messages
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>From</TableHead>
                    <TableHead>Subject</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredMessages?.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        <MessageSquare className="h-8 w-8 mx-auto mb-2 opacity-20" />
                        <p>No messages found in the current view.</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredMessages?.map((message) => (
                      <TableRow key={message.id} className={!message.isRead ? "bg-muted/30" : ""}>
                        <TableCell className="font-medium">
                          <div>
                            <p>{message.name}</p>
                            <p className="text-sm text-muted-foreground">{message.email}</p>
                          </div>
                        </TableCell>
                        <TableCell>{message.subject || "No Subject"}</TableCell>
                        <TableCell className="max-w-[200px]">
                          <p className="truncate">{message.message}</p>
                        </TableCell>
                        <TableCell>
                          {message.createdAt && format(new Date(message.createdAt), "PPP")}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            {message.isRead ? (
                              <Badge variant="outline" className="flex items-center gap-1">
                                <MailOpen className="h-3 w-3" />
                                <span>Read</span>
                              </Badge>
                            ) : (
                              <Badge variant="default" className="flex items-center gap-1">
                                <Mail className="h-3 w-3" />
                                <span>Unread</span>
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={() => handleViewMessage(message)}
                            >
                              <Eye className="h-4 w-4" />
                            </Button>
                            
                            <Button 
                              variant="outline" 
                              size="icon"
                              onClick={() => handleSendReply(message.email)}
                            >
                              <Send className="h-4 w-4" />
                            </Button>
                            
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="icon" className="text-red-500">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>
                                    Are you sure you want to delete this message?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete
                                    the contact message from the system.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDeleteMessage(message.id)}
                                    className="bg-red-500 text-white hover:bg-red-600"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
      
      {/* Message Detail Dialog */}
      {selectedMessage && (
        <Dialog open={isMessageDialogOpen} onOpenChange={setIsMessageDialogOpen}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>Message from {selectedMessage.name}</DialogTitle>
              <DialogDescription>
                {selectedMessage.createdAt && (
                  <span>
                    Received on {format(new Date(selectedMessage.createdAt), "PPP 'at' p")}
                  </span>
                )}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">From</h3>
                  <p>{selectedMessage.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                  <p>{selectedMessage.email}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Subject</h3>
                <p>{selectedMessage.subject || "No Subject"}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Message</h3>
                <div className="mt-2 p-4 rounded-md bg-muted whitespace-pre-wrap">
                  {selectedMessage.message}
                </div>
              </div>
            </div>
            
            <DialogFooter className="flex gap-2 mt-6">
              <Button
                variant="outline"
                onClick={() => setIsMessageDialogOpen(false)}
              >
                Close
              </Button>
              
              <Button
                variant="default"
                onClick={() => handleSendReply(selectedMessage.email)}
                className="gap-2"
              >
                <Send className="h-4 w-4" />
                Reply
              </Button>
              
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="gap-2">
                    <Trash2 className="h-4 w-4" />
                    Delete
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you sure you want to delete this message?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      the contact message from the system.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                      onClick={() => handleDeleteMessage(selectedMessage.id)}
                      className="bg-red-500 text-white hover:bg-red-600"
                    >
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </AdminLayout>
  );
}