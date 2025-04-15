import { useState } from "react";
import { useLocation } from "wouter";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/use-auth";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import smallLogo from "@assets/smalllogo1.png";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function AdminLogin() {
  const [_, setLocation] = useLocation();
  const { user, loginMutation } = useAuth();

  // Redirect if already logged in
  if (user) {
    setLocation("/admin/dashboard");
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
    loginMutation.mutate(data, {
      onSuccess: () => {
        setLocation("/admin/dashboard");
      },
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gray-50 dark:bg-gray-900">
      {/* Form Section */}
      <div className="flex items-center justify-center p-6 md:p-8">
        <Card className="w-full max-w-md shadow-lg border-0">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <img src={smallLogo} alt="JSS Logo" className="h-12" />
              <div>
                <CardTitle className="text-2xl">Admin Portal</CardTitle>
                <CardDescription>
                  JSS Polytechnic for Women
                </CardDescription>
              </div>
            </div>
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
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  className="w-full" 
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Signing in...
                    </>
                  ) : (
                    "Sign In"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col">
            <p className="text-sm text-muted-foreground text-center">
              Content Management System for JSS Polytechnic for Women
            </p>
          </CardFooter>
        </Card>
      </div>

      {/* Hero Image Section */}
      <div className="hidden md:flex flex-col items-center justify-center p-8 bg-gradient-to-r from-[#0A2463] to-[#3E92CC] text-white">
        <div className="max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Website Administration</h1>
          <p className="mb-6">
            Access the admin portal to manage website content including faculty profiles, 
            events, flash news, and contact messages.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Faculty Management</h3>
              <p className="text-sm">Update faculty profiles and information</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Flash News</h3>
              <p className="text-sm">Manage announcements and important notifications</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Events</h3>
              <p className="text-sm">Add and update upcoming college events</p>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <h3 className="font-semibold mb-2">Messages</h3>
              <p className="text-sm">View and respond to contact form messages</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}