import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient } from "@/lib/queryClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Loader2, Plus, Pencil, Trash2, UserPlus, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Faculty } from "@shared/schema";

const facultySchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  designation: z.string().min(3, "Position must be at least 3 characters"),
  department: z.string().min(3, "Department must be at least 3 characters"),
  qualification: z.string().min(3, "Qualification must be at least 3 characters"),
  image: z.any().optional(), // Allow File object or URL string
  profile: z.string().optional(),
  email: z.string().email("Must be a valid email").optional(),
  experience: z.string().optional(),
});

type FacultyFormValues = z.infer<typeof facultySchema>;

const departments = [
  "Architecture",
  "Apparel Design",
  "Commercial Practice",
  "Computer Science",
  "Electronics Communication",
  "Electronics Instrumentation",
  "Interior Design",
  "Information Science",
  "Administration",
  "Other",
];

export default function FacultyPage() {
  const { toast } = useToast();
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState<Faculty | null>(null);
  
  // Fetch faculty data
  const { data: facultyData, isLoading } = useQuery<Faculty[]>({
    queryKey: ["/api/admin/faculty"],
  });
  
  // Create form
  const createForm = useForm<FacultyFormValues>({
    resolver: zodResolver(facultySchema),
    defaultValues: {
      name: "",
      designation: "",
      department: "",
      qualification: "",
      image: "",
      profile: "",
      email: "",
      experience: "",
    },
  });
  
  // Edit form
  const editForm = useForm<FacultyFormValues>({
    resolver: zodResolver(facultySchema),
    defaultValues: {
      name: "",
      designation: "",
      department: "",
      qualification: "",
      image: "",
      profile: "",
      email: "",
      experience: "",
    },
  });
  
  // Create mutation
  const createMutation = useMutation({
    mutationFn: async (data: FacultyFormValues) => {
      const formData = new FormData();
      
      // Append all text fields
      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("department", data.department);
      formData.append("qualification", data.qualification);
      
      if (data.profile) formData.append("profile", data.profile);
      if (data.email) formData.append("email", data.email);
      if (data.experience) formData.append("experience", data.experience);
      
      // Append image file if it exists
      if (data.image instanceof File) {
        formData.append("image", data.image);
      } else if (typeof data.image === "string" && data.image) {
        formData.append("imageUrl", data.image);
      }
      
      const response = await fetch("/api/admin/faculty", {
        method: "POST",
        body: formData,
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to create faculty");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Faculty member created successfully",
      });
      setIsCreateDialogOpen(false);
      createForm.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/admin/faculty"] });
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
    mutationFn: async ({ id, data }: { id: number, data: FacultyFormValues }) => {
      const formData = new FormData();
      
      // Append all text fields
      formData.append("name", data.name);
      formData.append("designation", data.designation);
      formData.append("department", data.department);
      formData.append("qualification", data.qualification);
      
      if (data.profile) formData.append("profile", data.profile);
      if (data.email) formData.append("email", data.email);
      if (data.experience) formData.append("experience", data.experience);
      
      // Append image file if it exists
      if (data.image instanceof File) {
        formData.append("image", data.image);
      } else if (typeof data.image === "string" && data.image) {
        formData.append("imageUrl", data.image);
      }
      
      const response = await fetch(`/api/admin/faculty/${id}`, {
        method: "PATCH",
        body: formData,
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to update faculty");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Faculty member updated successfully",
      });
      setIsEditDialogOpen(false);
      setSelectedFaculty(null);
      queryClient.invalidateQueries({ queryKey: ["/api/admin/faculty"] });
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
      const response = await fetch(`/api/admin/faculty/${id}`, {
        method: "DELETE",
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete faculty");
      }
      
      return await response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Faculty member deleted successfully",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/admin/faculty"] });
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
  const onCreateSubmit = (data: FacultyFormValues) => {
    createMutation.mutate(data);
  };
  
  // Handle edit form submission
  const onEditSubmit = (data: FacultyFormValues) => {
    if (selectedFaculty) {
      updateMutation.mutate({ id: selectedFaculty.id, data });
    }
  };
  
  // Handle edit button click
  const handleEdit = (faculty: Faculty) => {
    setSelectedFaculty(faculty);
    editForm.reset({
      name: faculty.name,
      designation: faculty.designation,
      department: faculty.department,
      qualification: faculty.qualification,
      image: faculty.image || "",
      profile: faculty.profile || "",
      email: faculty.email || "",
      experience: faculty.experience || "",
    });
    setIsEditDialogOpen(true);
  };
  
  // Handle delete button click
  const handleDelete = (id: number) => {
    deleteMutation.mutate(id);
  };
  
  // Get initials for avatar
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };
  
  // Faculty form fields component (reused in create and edit forms)
  const FacultyFormFields = ({ form, formType }: { form: any, formType: "create" | "edit" }) => (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="designation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Position</FormLabel>
              <FormControl>
                <Input placeholder="Head of Department" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="department"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Department</FormLabel>
              <Select 
                onValueChange={field.onChange} 
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="qualification"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Qualification</FormLabel>
              <FormControl>
                <Input placeholder="M.Tech, PhD" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      
      <FormField
        control={form.control}
        name="image"
        render={({ field: { value, onChange, ...field } }) => (
          <FormItem>
            <FormLabel>Profile Image (Optional)</FormLabel>
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
                {formType === "edit" && typeof value === "string" && value && (
                  <div className="mt-2 flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">Current image:</p>
                    <Avatar>
                      <AvatarImage src={value} alt="Current profile" />
                      <AvatarFallback>IMG</AvatarFallback>
                    </Avatar>
                  </div>
                )}
              </div>
            </FormControl>
            <FormDescription>
              Upload a profile photo for the faculty member
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <FormField
        control={form.control}
        name="profile"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Biography (Optional)</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Brief description of faculty member..." 
                {...field} 
                className="resize-none"
                rows={3}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="example@jsspw.edu.in" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="experience"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Experience (Optional)</FormLabel>
              <FormControl>
                <Input placeholder="10+ years" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  );
  
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Faculty</h1>
            <p className="text-muted-foreground">
              Manage faculty members across all departments
            </p>
          </div>
          
          <Dialog open={isCreateDialogOpen} onOpenChange={setIsCreateDialogOpen}>
            <DialogTrigger asChild>
              <Button>
                <UserPlus className="h-4 w-4 mr-2" />
                Add Faculty
              </Button>
            </DialogTrigger>
            
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>Add New Faculty Member</DialogTitle>
                <DialogDescription>
                  Create a new faculty profile with their details
                </DialogDescription>
              </DialogHeader>
              
              <Form {...createForm}>
                <form onSubmit={createForm.handleSubmit(onCreateSubmit)} className="space-y-4 py-4">
                  <FacultyFormFields form={createForm} formType="create" />
                  
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
                        "Create Faculty"
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
            <CardTitle>Faculty List</CardTitle>
            <CardDescription>
              All faculty members in the system
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
                  Total of {facultyData?.length || 0} faculty members
                </TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>Faculty</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Qualification</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facultyData?.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                        <Users className="h-8 w-8 mx-auto mb-2 opacity-20" />
                        <p>No faculty members found. Add your first faculty member.</p>
                      </TableCell>
                    </TableRow>
                  ) : (
                    facultyData?.map((faculty) => (
                      <TableRow key={faculty.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={faculty.image || ""} alt={faculty.name} />
                              <AvatarFallback>{getInitials(faculty.name)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{faculty.name}</p>
                              {faculty.profile && (
                                <p className="text-xs text-muted-foreground max-w-[200px] truncate">
                                  {faculty.profile}
                                </p>
                              )}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{faculty.designation}</TableCell>
                        <TableCell>{faculty.department}</TableCell>
                        <TableCell>{faculty.qualification}</TableCell>
                        <TableCell>
                          {faculty.email && (
                            <p className="text-sm">{faculty.email}</p>
                          )}
                          {faculty.experience && (
                            <p className="text-sm text-muted-foreground">{faculty.experience}</p>
                          )}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              onClick={() => handleEdit(faculty)}
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
                                    Are you sure you want to delete this faculty member?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete
                                    the faculty member's profile from the system.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDelete(faculty.id)}
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
            <DialogTitle>Edit Faculty Member</DialogTitle>
            <DialogDescription>
              Update the selected faculty member's profile
            </DialogDescription>
          </DialogHeader>
          
          <Form {...editForm}>
            <form onSubmit={editForm.handleSubmit(onEditSubmit)} className="space-y-4 py-4">
              <FacultyFormFields form={editForm} formType="edit" />
              
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
                    "Update Faculty"
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