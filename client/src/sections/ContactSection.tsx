import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),
  lastName: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  subject: z.string().min(1, "Please select a subject."),
  message: z.string().min(10, "Message must be at least 10 characters.")
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const { mutate, isPending } = useMutation({
    mutationFn: (data: ContactFormValues) => 
      apiRequest("POST", "/api/contact", data),
    onSuccess: (response) => {
      // Check if the email confirmation was sent successfully
      const emailSent = response.emailSent;
      
      toast({
        title: "Message Sent",
        description: emailSent 
          ? "Thank you for contacting us. A confirmation email has been sent to your inbox. Our team will get in touch with you shortly."
          : "Thank you for contacting us. We will get back to you soon.",
        variant: "default",
      });
      reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: ContactFormValues) => {
    mutate(data);
  };

  return (
    <section id="contact" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] dark:text-white md:text-4xl">Contact Us</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-[#1C1C1C] dark:text-gray-300">
            Have questions? We're here to help. Reach out to us for more information about our programs, campus, or admissions process.
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="animate-on-scroll rounded-lg bg-[#F3F4F6] dark:bg-gray-800 p-8 shadow-md">
            <h3 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Send Us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-[#1C1C1C] dark:text-gray-300">First Name *</label>
                  <input 
                    type="text" 
                    id="first-name"
                    {...register("firstName")}
                    className={`w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30 dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-[#1C1C1C] dark:text-gray-300">Last Name *</label>
                  <input 
                    type="text" 
                    id="last-name"
                    {...register("lastName")}
                    className={`w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30 dark:bg-gray-700 dark:text-white`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1C1C1C] dark:text-gray-300">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  {...register("email")}
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30 dark:bg-gray-700 dark:text-white`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#1C1C1C] dark:text-gray-300">Subject *</label>
                <select 
                  id="subject"
                  {...register("subject")}
                  className={`w-full rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30 dark:bg-gray-700 dark:text-white`}
                >
                  <option value="" disabled>Please select</option>
                  <option value="admissions">Admissions Information</option>
                  <option value="programs">Academic Programs</option>
                  <option value="financial-aid">Financial Aid</option>
                  <option value="housing">Housing & Campus Life</option>
                  <option value="visit">Campus Visits</option>
                  <option value="other">Other</option>
                </select>
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1C1C1C] dark:text-gray-300">Message *</label>
                <textarea 
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30 dark:bg-gray-700 dark:text-white`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>
              
              <button 
                type="submit" 
                disabled={isPending}
                className="rounded-full bg-[#0A2463] px-8 py-3 font-medium text-white transition-colors hover:bg-[#0A2463]/90 disabled:opacity-70"
              >
                {isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-on-scroll">
            <h3 className="mb-6 text-2xl font-semibold text-[#0A2463] dark:text-white">Contact Information</h3>
            
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10 dark:bg-blue-900/20">
                  <MapPin className="h-6 w-6 text-[#0A2463] dark:text-blue-400" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Main Campus</h4>
                <p className="text-[#1C1C1C] dark:text-gray-300">8J97+MRP, University Of Mysore Campus<br />Mysuru, Karnataka 570006<br />India</p>
              </div>
              
              <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10 dark:bg-blue-900/20">
                  <Phone className="h-6 w-6 text-[#0A2463] dark:text-blue-400" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Phone</h4>
                <p className="text-[#1C1C1C] dark:text-gray-300">Main: (555) 123-4567<br />Admissions: (555) 123-8910<br />Financial Aid: (555) 123-1112</p>
              </div>
              
              <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10 dark:bg-blue-900/20">
                  <Mail className="h-6 w-6 text-[#0A2463] dark:text-blue-400" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Email</h4>
                <p className="text-[#1C1C1C] dark:text-gray-300">info@jsspolytechnic.ac.in<br />admissions@jsspolytechnic.ac.in<br />principal@jsspolytechnic.ac.in</p>
              </div>
              
              <div className="rounded-lg bg-white dark:bg-gray-800 p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10 dark:bg-blue-900/20">
                  <Clock className="h-6 w-6 text-[#0A2463] dark:text-blue-400" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463] dark:text-white">Office Hours</h4>
                <p className="text-[#1C1C1C] dark:text-gray-300">Monday-Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
            
            <div className="h-80 w-full overflow-hidden rounded-lg shadow-md">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2104043490816!2d76.6366678!3d12.3118722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf701103f9a1f1%3A0xc37fbae2a124da0a!2sJSS%20Polytechnic%20for%20Women!5e0!3m2!1sen!2sin!4v1649675858091!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="JSS Polytechnic for Women Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
