"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence, Variants } from "framer-motion";
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
import { FormField } from "../../ui/custom/formField";
import { Card, CardContent } from "../../ui/card";
import {
  Scissors,
  Calendar,
  MessageSquare,
  User,
  Mail,
  Phone,
} from "lucide-react";
import { DateTimePicker } from "../../ui/custom/dateTimePicker";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { validateRecaptcha } from "@/lib/reCaptcha";

/**
 * ContactForm - Handles user inquiries and appointment bookings.
 * Validates input with Zod and protects submissions with Google reCAPTCHA.
 * Dynamically shows form fields based on the selected message type (query or appointment).
 * Submits data to Supabase and provides user feedback via toast notifications.
 * Designed to be accessible and user-friendly with responsive layout.
 */

export function ContactForm() {
  // Initialize form with react-hook-form and Zod validation
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema), // schema validation for form
    defaultValues: {
      type: "query", // default form type is general query
    },
  });

  // Watch form field 'type' to conditionally render appointment-specific inputs
  const selectedType = watch("type");

  // Get the reCAPTCHA execution function from provider
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Handles form submission
  const onSubmit = async (data: ContactFormValues) => {
    // Safety check: ensure reCAPTCHA is available
    if (!executeRecaptcha) {
      toast.error("reCAPTCHA not available. Please refresh the page.");
      return;
    }

    try {
      // Run reCAPTCHA verification with action label 'contact_form_submit'
      const recaptchaToken = await executeRecaptcha("contact_form_submit");

      // Validate the token on the backend (extra security)
      await validateRecaptcha(recaptchaToken);

      // Prepare payload according to form type (query or appointment)
      const payload = {
        full_name: data.full_name,
        email: data.email,
        phone: data.phone || null, // optional phone
        type: data.type,
        message: data.message,
        // Only send appointment-specific fields if type === appointment
        service: data.type === "appointment" ? data.service : null,
        preferred_time:
          data.type === "appointment" ? data.preferred_time : null,
      };

      // Insert form data into Supabase table
      const { error } = await supabase
        .from("suri_contact_message_appointment")
        .insert([payload]);

      if (error) {
        // If DB insertion fails, notify user
        console.error("Failed to submit contact form:", error);
        toast.error("Something went wrong. Please try again later.");
        return;
      }

      // Show success message depending on form type
      const successMessage =
        data.type === "appointment"
          ? "Appointment booked successfully!"
          : "Message sent successfully!";

      toast.success(successMessage);
      reset(); // Clear form after successful submission
    } catch (err) {
      // Catch any unexpected errors and notify user
      console.error("Unexpected error submitting form:", err);
      toast.error("Unexpected error occurred. Please try again.");
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardSlideVariants: Variants = {
    hidden: { x: -100, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const fieldPopVariants: Variants = {
    hidden: { scale: 0.8, opacity: 0, rotateX: -15 },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    },
  };

  const iconBounceVariants: Variants = {
    hidden: { scale: 0.8, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
  };

  const rightColumnVariants = {
    query: {
      rotateY: 5,
      scale: 0.95,
      opacity: 0.8,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
    appointment: {
      rotateY: 0,
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const buttonPulseVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.98 },
    loading: {
      scale: [1, 1.02, 1],
      transition: { repeat: Infinity, duration: 1.5 },
    },
  };

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-4"
      id="contact-form"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Form element that triggers onSubmit handler */}
      <motion.form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Radio buttons to select message type: query or appointment */}
        <motion.div variants={cardSlideVariants}>
          <Card className="border-2 border-dashed border-muted-foreground/20 bg-muted/30 overflow-hidden">
            <CardContent>
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
                      {/* General Query option */}
                      <motion.label
                        htmlFor="r1"
                        className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                        whileHover={{ scale: 1.02, rotateZ: 1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <RadioGroupItem
                          value="query"
                          id="r1"
                          className="sr-only"
                        />
                        <div className="flex items-center gap-2">
                          <motion.div
                            variants={iconBounceVariants}
                            animate={
                              selectedType === "query" ? "visible" : "hidden"
                            }
                          >
                            <MessageSquare className="w-5 h-5 text-primary" />
                          </motion.div>
                          <span className="text-base font-medium">
                            General Query
                          </span>
                        </div>
                      </motion.label>

                      {/* Appointment booking option */}
                      <motion.label
                        htmlFor="r2"
                        className="flex items-center space-x-3 p-4 rounded-lg border-2 border-muted hover:border-primary/50 transition-colors cursor-pointer has-[:checked]:border-primary has-[:checked]:bg-primary/5"
                        whileHover={{ scale: 1.02, rotateZ: -1 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <RadioGroupItem
                          value="appointment"
                          id="r2"
                          className="sr-only"
                        />
                        <div className="flex items-center gap-2">
                          <motion.div
                            variants={iconBounceVariants}
                            animate={
                              selectedType === "appointment"
                                ? "visible"
                                : "hidden"
                            }
                          >
                            <Calendar className="w-5 h-5 text-primary" />
                          </motion.div>
                          <span className="text-base font-medium">
                            Book Appointment
                          </span>
                        </div>
                      </motion.label>
                    </RadioGroup>
                  )}
                />
              </FormField>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main form fields split into two columns on larger screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left column: always visible personal info + message */}
          <motion.div variants={fieldPopVariants}>
            <Card className="h-fit">
              <CardContent className="p-6 space-y-6">
                <motion.div
                  className="flex items-center gap-2 mb-4"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                  >
                    <User className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold">
                    Personal Information
                  </h3>
                </motion.div>

                {/* Full Name field */}
                <motion.div
                  variants={fieldPopVariants}
                  whileFocus={{ scale: 1.02 }}
                >
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
                </motion.div>

                {/* Email field */}
                <motion.div
                  variants={fieldPopVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <FormField
                    id="email"
                    label="Email Address"
                    error={errors.email}
                  >
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
                </motion.div>

                {/* Phone number field (optional) */}
                <motion.div
                  variants={fieldPopVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <FormField
                    id="phone"
                    label="Phone Number"
                    error={errors.phone}
                  >
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
                </motion.div>

                {/* Message textarea */}
                <motion.div
                  variants={fieldPopVariants}
                  whileFocus={{ scale: 1.02 }}
                >
                  <FormField
                    id="message"
                    label="Message"
                    error={errors.message}
                  >
                    <Textarea
                      id="message"
                      rows={4}
                      {...register("message")}
                      placeholder="Tell us how we can help you..."
                      className="resize-none focus-visible:ring-[1px]"
                    />
                  </FormField>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right column: conditionally rendered appointment details */}
          <motion.div
            className="space-y-6"
            variants={rightColumnVariants}
            animate={selectedType}
          >
            <AnimatePresence mode="wait">
              {selectedType === "appointment" && (
                <motion.div
                  key="appointment-content"
                  initial={{ rotateY: 90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: -90, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                >
                  {/* Service selector dropdown */}
                  <motion.div
                    variants={fieldPopVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <motion.div
                          className="flex items-center gap-2 mb-4"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <motion.div
                            animate={{ rotate: [0, 15, -15, 0] }}
                            transition={{
                              repeat: Infinity,
                              duration: 4,
                              delay: 2,
                            }}
                          >
                            <Scissors className="w-5 h-5 text-primary" />
                          </motion.div>
                          <h3 className="text-lg font-semibold">
                            Service Selection
                          </h3>
                        </motion.div>

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
                  </motion.div>

                  {/* Preferred date & time picker */}
                  <motion.div
                    variants={fieldPopVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <motion.div
                          className="flex items-center gap-2 mb-4"
                          initial={{ x: 20, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                              delay: 3,
                            }}
                          >
                            <Calendar className="w-5 h-5 text-primary" />
                          </motion.div>
                          <h3 className="text-lg font-semibold">
                            Preferred Date & Time
                          </h3>
                        </motion.div>

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
                  </motion.div>
                </motion.div>
              )}

              {/* When user selects General Query, show this info card */}
              {selectedType === "query" && (
                <motion.div
                  key="query-content"
                  initial={{ scale: 0.8, opacity: 0, rotateZ: -5 }}
                  animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
                  exit={{ scale: 0.8, opacity: 0, rotateZ: 5 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                >
                  <Card className="border-dashed border-2 border-muted-foreground/30">
                    <CardContent className="p-8 text-center">
                      <motion.div
                        animate={{
                          rotateY: [0, 15, -15, 0],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut",
                        }}
                      >
                        <MessageSquare className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-lg font-medium text-muted-foreground mb-2">
                        General Inquiry
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Fill out your details and message on the left to get in
                        touch with us.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Submit button with loading state and dynamic label */}
        <motion.div
          className="flex justify-center pt-4"
          variants={fieldPopVariants}
        >
          <motion.div
            variants={buttonPulseVariants}
            initial="idle"
            whileHover="hover"
            whileTap="tap"
            animate={isSubmitting ? "loading" : "idle"}
          >
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="px-12 py-3 text-lg font-semibold min-w-[200px] shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 hover:bg-accent"
            >
              <AnimatePresence mode="wait">
                {isSubmitting ? (
                  <motion.div
                    key="loading"
                    className="flex items-center gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                  >
                    {/* Simple spinner animation */}
                    <motion.div
                      className="w-4 h-4 border-2 border-amber-100 border-t-transparent rounded-full"
                      animate={{ rotate: 360 }}
                      transition={{
                        repeat: Infinity,
                        duration: 1,
                        ease: "linear",
                      }}
                    />
                    <span>
                      {selectedType === "appointment"
                        ? "Booking..."
                        : "Sending..."}
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    {/* Button icon and label based on form type */}
                    {selectedType === "appointment" ? (
                      <>
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <Calendar className="w-4 h-4" />
                        </motion.div>
                        <span>Book Appointment</span>
                      </>
                    ) : (
                      <>
                        <motion.div
                          animate={{ x: [0, 3, 0] }}
                          transition={{ repeat: Infinity, duration: 2 }}
                        >
                          <MessageSquare className="w-4 h-4" />
                        </motion.div>
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </motion.div>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
