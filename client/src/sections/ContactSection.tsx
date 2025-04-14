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
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We will get back to you soon.",
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
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-[#0A2463] md:text-4xl">Contact Us</h2>
          <div className="mx-auto h-1 w-24 bg-[#D8315B]"></div>
          <p className="mx-auto mt-6 max-w-3xl text-[#1C1C1C]">
            Have questions? We're here to help. Reach out to us for more information about our programs, campus, or admissions process.
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="animate-on-scroll rounded-lg bg-[#F3F4F6] p-8 shadow-md">
            <h3 className="mb-6 text-2xl font-semibold text-[#0A2463]">Send Us a Message</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="mb-2 block text-sm font-medium text-[#1C1C1C]">First Name *</label>
                  <input 
                    type="text" 
                    id="first-name"
                    {...register("firstName")}
                    className={`w-full rounded-lg border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30`}
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-xs text-red-500">{errors.firstName.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="last-name" className="mb-2 block text-sm font-medium text-[#1C1C1C]">Last Name *</label>
                  <input 
                    type="text" 
                    id="last-name"
                    {...register("lastName")}
                    className={`w-full rounded-lg border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30`}
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-xs text-red-500">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#1C1C1C]">Email Address *</label>
                <input 
                  type="email" 
                  id="email"
                  {...register("email")}
                  className={`w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="subject" className="mb-2 block text-sm font-medium text-[#1C1C1C]">Subject *</label>
                <select 
                  id="subject"
                  {...register("subject")}
                  className={`w-full rounded-lg border ${errors.subject ? 'border-red-500' : 'border-gray-300'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30`}
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
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#1C1C1C]">Message *</label>
                <textarea 
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={`w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} p-3 focus:border-[#3E92CC] focus:outline-none focus:ring-2 focus:ring-[#3E92CC]/30`}
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
            <h3 className="mb-6 text-2xl font-semibold text-[#0A2463]">Contact Information</h3>
            
            <div className="mb-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10">
                  <MapPin className="h-6 w-6 text-[#0A2463]" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463]">Main Campus</h4>
                <p className="text-[#1C1C1C]">1234 University Avenue<br />Collegetown, CA 90210<br />United States</p>
              </div>
              
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10">
                  <Phone className="h-6 w-6 text-[#0A2463]" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463]">Phone</h4>
                <p className="text-[#1C1C1C]">Main: (555) 123-4567<br />Admissions: (555) 123-8910<br />Financial Aid: (555) 123-1112</p>
              </div>
              
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10">
                  <Mail className="h-6 w-6 text-[#0A2463]" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463]">Email</h4>
                <p className="text-[#1C1C1C]">info@horizoncollege.edu<br />admissions@horizoncollege.edu<br />finaid@horizoncollege.edu</p>
              </div>
              
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2463]/10">
                  <Clock className="h-6 w-6 text-[#0A2463]" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-[#0A2463]">Office Hours</h4>
                <p className="text-[#1C1C1C]">Monday-Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM<br />Sunday: Closed</p>
              </div>
            </div>
            
            <div className="h-80 w-full overflow-hidden rounded-lg">
              <div className="flex h-full items-center justify-center bg-[#F3F4F6]">
                <span className="text-[#1C1C1C]">Interactive Campus Map</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
