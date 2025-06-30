"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  ContactFormValues,
} from "@/lib/validation/contactForm";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FormField } from "../ui/custom/formField";
import { Card, CardContent } from "../ui/card";
import {
  Scissors,
  Calendar,
  MessageSquare,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { DateTimePicker } from "../ui/custom/dateTimePicker";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { validateRecaptcha } from "@/lib/reCaptcha";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      type: "query",
    },
  });

  const selectedType = watch("type");
  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = async (data: ContactFormValues) => {
    console.log("Form submitted:", data);

    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not available. Please refresh the page.");
      return;
    }

    try {
      const recaptchaToken = await executeRecaptcha("contact_form_submit");

      // Validate reCAPTCHA
      await validateRecaptcha(recaptchaToken);

      // Build insert payload
      const payload = {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || null,
        type: data.type,
        message: data.message,
        service: data.type === "appointment" ? data.service : null,
        preferred_time:
          data.type === "appointment" ? data.preferred_time : null,
      };

      const { error } = await supabase
        .from("suri_contact_message_appointment")
        .insert([payload]);

      if (error) {
        console.error("Failed to submit contact form:", error);
        toast.error("Something went wrong. Please try again later.");
        return;
      }

      // Dynamic success message based on form type
      const successMessage =
        data.type === "appointment"
          ? "Appointment booked successfully!"
          : "Message sent successfully!";

      toast.success(successMessage);
      reset();
    } catch (err) {
      console.error("Unexpected error submitting form:", err);
      toast.error("Unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Contact Type Selection */}
        <Card className="border-2 border-dashed border-muted-foreground/20 bg-muted/30">
          <CardContent className="pt-6">
            <FormField id="type" label="" error={errors.type}>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="grid grid-cols-2 gap-4"
                  >
                    <label
                      htmlFor="r1"
                      className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <RadioGroupItem
                        value="query"
                        id="r1"
                        className="sr-only"
                      />
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <span className="text-base font-medium">
                          General Query
                        </span>
                      </div>
                    </label>

                    <label
                      htmlFor="r2"
                      className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                    >
                      <RadioGroupItem
                        value="appointment"
                        id="r2"
                        className="sr-only"
                      />
                      <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" />
                        <span className="text-base font-medium">
                          Book Appointment
                        </span>
                      </div>
                    </label>
                  </RadioGroup>
                )}
              />
            </FormField>
          </CardContent>
        </Card>

        {/* Main Form Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Personal Information */}
          <Card className="h-fit">
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Personal Information</h3>
              </div>

              <FormField
                id="full_name"
                label="Full Name"
                error={errors.full_name}
              >
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="full_name"
                    {...register("full_name")}
                    className="pl-10 focus-visible:ring-[1px]"
                    placeholder="Monkey D luffy"
                  />
                </div>
              </FormField>

              <FormField id="email" label="Email Address" error={errors.email}>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="pl-10 focus-visible:ring-[1px]"
                    placeholder="monkeyDluff@gmail.com"
                  />
                </div>
              </FormField>

              <FormField id="phone" label="Phone Number" error={errors.phone}>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    className="pl-10 focus-visible:ring-[1px]"
                    placeholder="+977-98XXXXXXXX"
                  />
                </div>
              </FormField>

              <FormField id="message" label="Message" error={errors.message}>
                <Textarea
                  id="message"
                  rows={4}
                  {...register("message")}
                  placeholder="Tell us how we can help you..."
                  className="resize-none focus-visible:ring-[1px]"
                />
              </FormField>
            </CardContent>
          </Card>

          {/* Right Column - Appointment Details */}
          <div className="space-y-6">
            {selectedType === "appointment" && (
              <>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Scissors className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">
                        Service Selection
                      </h3>
                    </div>

                    <FormField
                      id="service"
                      label="Choose Your Service"
                      error={errors.service}
                    >
                      <Controller
                        name="service"
                        control={control}
                        render={({ field }) => (
                          <Select
                            value={field.value ?? ""}
                            onValueChange={field.onChange}
                          >
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Classic Haircut">
                                <div className="flex items-center gap-2">
                                  <span>✂️</span>
                                  <span>Classic Haircut</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="Beard Trim & Shape">
                                <div className="flex items-center gap-2">
                                  <span>🧔</span>
                                  <span>Beard Trim & Shape</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="Hot Towel Shave">
                                <div className="flex items-center gap-2">
                                  <span>🪒</span>
                                  <span>Hot Towel Shave</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="Fade & Taper Combo">
                                <div className="flex items-center gap-2">
                                  <span>💇</span>
                                  <span>Fade & Taper Combo</span>
                                </div>
                              </SelectItem>
                              <SelectItem value="Hair Wash & Style">
                                <div className="flex items-center gap-2">
                                  <span>🧴</span>
                                  <span>Hair Wash & Style</span>
                                </div>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      />
                    </FormField>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">
                        Preferred Date & Time
                      </h3>
                    </div>

                    <FormField
                      id="preferred_time"
                      label=""
                      error={errors.preferred_time}
                    >
                      <Controller
                        name="preferred_time"
                        control={control}
                        render={({ field }) => (
                          <div className="flex justify-center">
                            <DateTimePicker
                              value={field.value}
                              onChange={field.onChange}
                            />
                          </div>
                        )}
                      />
                    </FormField>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedType === "query" && (
              <Card className="border-dashed border-2 border-muted-foreground/30">
                <CardContent className="p-8 text-center">
                  <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-muted-foreground mb-2">
                    General Inquiry
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Fill out your details and message on the left to get in
                    touch with us.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4">
          <Button
            type="submit"
            size="lg"
            disabled={isSubmitting}
            className="px-12 py-3 text-lg font-semibold min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 hover:bg-accent"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 border-2 border-amber-100 border-t-transparent rounded-full animate-spin" />
                <span>
                  {selectedType === "appointment" ? "Booking..." : "Sending..."}
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                {selectedType === "appointment" ? (
                  <>
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </>
                ) : (
                  <>
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </div>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
