import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
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
import { 
  Loader2, 
  Plus, 
  Pencil, 
  Trash2, 
  Calendar as CalendarIcon,
  CalendarDays 
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Event } from "@shared/schema";

const eventSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title must be less than 100 characters"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  date: z.date({
    required_error: "Please select a date for the event",
  }),
  time: z.string().optional(),
  image: z.string().optional().or(z.instanceof(File)),
  active: z.boolean().default(true),
});

type EventFormValues = z.infer<typeof eventSchema>;

export default function EventsPage() {
  const { toast } = useToast();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  // Fetch events
  const { data: eventsData, isLoading } = useQuery<Event[]>({
    queryKey: ["/api/admin/events"],
  });
  
  // Create form
  const createForm = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      image: "",
      time: "",
      active: true,
    },
  });
  
  // Edit form
  const editForm = useForm<EventFormValues>({
    resolver: zodResolver(eventSchema),
    defaultValues: {
      title: "",
      description: "",
      location: "",
      image: "",
      time: "",
      active: true,
    },
  });
  
  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: EventFormValues) => {
      // Create form data for file uploads
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("date", data.date.toISOString());
      formData.append("active", String(data.active));
      
      if (data.time) {
        formData.append("time", data.time);
      }
      
      if (data.image) {
        if (data.image instanceof File) {
          formData.append("image", data.image);
        } else if (typeof data.image === 'string') {
          formData.append("imageUrl", data.image);
        }
      }
      
      const response = await fetch("/api/admin/events", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create event");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Event created successfully",
      });
      setIsCreateDialogOpen(false);
      createForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Update mutation
  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number, data: EventFormValues }) => {
      // Create form data for file uploads
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("location", data.location);
      formData.append("date", data.date.toISOString());
      formData.append("active", String(data.active));
      
      if (data.time) {
        formData.append("time", data.time);
      }
      
      if (data.image) {
        if (data.image instanceof File) {
          formData.append("image", data.image);
        } else if (typeof data.image === 'string') {
          formData.append("imageUrl", data.image);
        }
      }
      
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "PATCH",
        body: formData,
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update event");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Event updated successfully",
      });
      setIsEditDialogOpen(false);
      setSelectedEvent(null);
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
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
      const response = await fetch(`/api/admin/events/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok && response.status !== 204) {
        // Only try to parse JSON if it's not a 204 response
        const errorText = await response.text();
        let errorMessage = "Failed to delete event";
        try {
          const errorJson = JSON.parse(errorText);
          errorMessage = errorJson.message || errorMessage;
        } catch (e) {
          // If the response isn't valid JSON, use the default message
        }
        throw new Error(errorMessage);
      }
      
      return { success: true };
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Event deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/events"] });
      // Also invalidate the public events endpoint
      queryClient.invalidateQueries({ queryKey: ["/api/events"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    },
  });
  
  // Handle create form submission
  const onCreateSubmit = (data: EventFormValues) => {
    createMutation.mutate(data);
  };
  
  // Handle edit form submission
  const onEditSubmit = (data: EventFormValues) => {
    if (selectedEvent) {
      updateMutation.mutate({ id: selectedEvent.id, data });
    }
  };
  
  // Handle edit button click
  const handleEdit = (event: Event) => {
    setSelectedEvent(event);
    editForm.reset({
      title: event.title,
      description: event.description,
      location: event.location,
      date: new Date(event.date),
      time: event.time || "",
      image: event.image || "",
      active: event.active,
    });
    setIsEditDialogOpen(true);
  };
  
  // Handle delete button click
  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  
  // Check if an event is upcoming or past
  const isUpcomingEvent = (date: string | Date) => {
    const eventDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return eventDate >= today;
  };
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Events</h1>
            <p className="text-muted-foreground">
              Manage college events and activities
            </p>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Event</DialogTitle>
                <DialogDescription>
                  Create a new event for the college
                </DialogDescription>
              </DialogHeader>
              
              <Form {...createForm}>
                <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-4 py-4">
                  <FormField
                    control={createForm.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Annual Sports Day" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={createForm.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Event Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant="outline"
                                  className={cn(
                                    "pl-3 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={createForm.control}
                      name="location"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Location</FormLabel>
                          <FormControl>
                            <Input placeholder="College Auditorium" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={createForm.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Event Time (Optional)</FormLabel>
                        <FormControl>
                          <Input placeholder="10:00 AM" {...field} />
                        </FormControl>
                        <FormDescription>
                          Time of the event (e.g., 10:00 AM)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={createForm.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Event details and description..." 
                            className="min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={createForm.control}
                    name="image"
                    render={({ field: { value, onChange, ...field } }) => (
                      <FormItem>
                        <FormLabel>Event Image (Optional)</FormLabel>
                        <FormControl>
                          <div className="flex flex-col gap-2">
                            <Input 
                              type="file" 
                              accept="image/*"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  onChange(file);
                                }
                              }}
                              {...field}
                            />
                            {typeof value === 'string' && value && (
                              <div className="mt-2">
                                <p className="text-sm text-muted-foreground mb-1">Current image:</p>
                                <img 
                                  src={value} 
                                  alt="Event preview" 
                                  className="h-20 w-auto object-cover rounded-md border"
                                />
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormDescription>
                          Upload an image for the event (JPG, PNG, GIF)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={createForm.control}
                    name="active"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Active Status</FormLabel>
                          <FormDescription>
                            Event will only show if active
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <DialogFooter>
                    <Button
                      type="submit"
                      disabled={createMutation.isPending}
                    >
                      {createMutation.isPending ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Creating...
                        </>
                      ) : (
                        "Create Event"
                      )}
                    </Button>
                  </DialogFooter>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Events List</CardTitle>
            <CardDescription>
              All college events in the system
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : (
              <Table>
                <TableCaption>
                  Total of {eventsData?.length || 0} events
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {eventsData?.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        <CalendarDays className="h-8 w-8 mx-auto mb-2 opacity-20" />
                        <p>No events found. Add your first event.</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    eventsData?.map((event) => (
                      <TableRow key={event.id}>
                        <TableCell>
                          <div className="font-medium">{event.title}</div>
                          <div className="text-sm text-muted-foreground max-w-[250px] truncate">
                            {event.description}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-col">
                            <span className="font-medium">
                              {format(new Date(event.date), "MMMM d, yyyy")}
                            </span>
                            <Badge 
                              variant={isUpcomingEvent(event.date) ? "default" : "outline"}
                              className="mt-1 w-fit"
                            >
                              {isUpcomingEvent(event.date) ? "Upcoming" : "Past"}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>{event.location}</TableCell>
                        <TableCell>
                          <Badge 
                            variant={event.active ? "default" : "outline"}
                            className="w-fit"
                          >
                            {event.active ? "Active" : "Inactive"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={() => handleEdit(event)}
                            >
                              <Pencil className="h-4 w-4" />
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
                                    Are you sure you want to delete this event?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete
                                    the event from the system.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(event.id)}
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
      
      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>
              Update the selected event details
            </DialogDescription>
          </DialogHeader>
          
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(onEditSubmit)} className="space-y-4 py-4">
              <FormField
                control={editForm.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Annual Sports Day" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={editForm.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Event Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant="outline"
                              className={cn(
                                "pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={editForm.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Location</FormLabel>
                      <FormControl>
                        <Input placeholder="College Auditorium" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={editForm.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Time (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="10:00 AM" {...field} />
                    </FormControl>
                    <FormDescription>
                      Time of the event (e.g., 10:00 AM)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={editForm.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Event details and description..." 
                        className="min-h-[120px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={editForm.control}
                name="image"
                render={({ field: { value, onChange, ...field } }) => (
                  <FormItem>
                    <FormLabel>Event Image (Optional)</FormLabel>
                    <FormControl>
                      <div className="flex flex-col gap-2">
                        <Input 
                          type="file" 
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              onChange(file);
                            }
                          }}
                          {...field}
                        />
                        {typeof value === 'string' && value && (
                          <div className="mt-2">
                            <p className="text-sm text-muted-foreground mb-1">Current image:</p>
                            <img 
                              src={value} 
                              alt="Event preview" 
                              className="h-20 w-auto object-cover rounded-md border"
                            />
                          </div>
                        )}
                      </div>
                    </FormControl>
                    <FormDescription>
                      Upload a new image or keep the existing one
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={editForm.control}
                name="active"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                    <div className="space-y-0.5">
                      <FormLabel>Active Status</FormLabel>
                      <FormDescription>
                        Event will only show if active
                      </FormDescription>
                    </div>
                    <FormControl>
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button
                  type="submit"
                  disabled={updateMutation.isPending}
                >
                  {updateMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Update Event"
                  )}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </AdminLayout>
  );
}