import { useState } from "react";
import { useLocation } from "wouter";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, LockKeyhole } from "lucide-react";
import smallLogo from "@assets/smalllogo1.png";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const [location, navigate] = useLocation();
  const { user, isLoading, loginMutation } = useAuth();
  const [authError, setAuthError] = useState<string | null>(null);
  
  // If user is already logged in, redirect to dashboard
  if (user && !isLoading) {
    navigate("/admin/dashboard");
    return null;
  }
  
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });
  
  const onSubmit = (data: LoginFormValues) => {
    setAuthError(null);
    loginMutation.mutate(data, {
      onError: (error) => {
        setAuthError(error.message || "Invalid username or password");
      },
      onSuccess: () => {
        navigate("/admin/dashboard");
      },
    });
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
      <div className="w-full max-w-screen-xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Login Form */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="space-y-1">
              <div className="flex items-center justify-center mb-4">
                <img src={smallLogo} alt="JSS Logo" className="h-12 mr-3" />
              </div>
              <CardTitle className="text-2xl text-center">Admin Login</CardTitle>
              <CardDescription className="text-center">
                Enter your credentials to access the admin dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your username" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="Enter your password" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {authError && (
                    <div className="p-3 rounded-md bg-red-50 text-red-500 text-sm dark:bg-red-900/30 dark:text-red-300">
                      {authError}
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isLoading || loginMutation.isPending}
                  >
                    {(isLoading || loginMutation.isPending) ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Please wait
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-6">
              <Button variant="link" onClick={() => navigate("/")}>
                Return to Website
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Welcome Banner */}
        <div className="hidden lg:flex flex-col justify-center p-8 bg-primary text-primary-foreground rounded-xl">
          <div className="max-w-md mx-auto space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Admin Portal
              </h1>
              <p className="text-xl">
                JSS Polytechnic for Women
              </p>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="h-24 w-24 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <LockKeyhole className="h-12 w-12" />
              </div>
            </div>
            
            <div className="space-y-4 text-center">
              <p className="text-primary-foreground/80">
                This secure portal allows authorized personnel to manage website content, view contact form submissions, and monitor website statistics.
              </p>
              <div className="flex justify-center">
                <ul className="space-y-2 text-left">
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Manage faculty profiles
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Update flash news
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Add upcoming events
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2">✓</span> Respond to contact messages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}