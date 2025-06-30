import React from "react";
import { LucideIcon } from "lucide-react";
import { Label } from "../label";

interface FormFieldProps {
  id: string;
  label: string;
  icon?: LucideIcon;
  error?: {
    message?: string;
  };
  children: React.ReactNode;
}

export const FormField = ({
  id,
  label,
  icon: Icon,
  error,
  children,
}: FormFieldProps) => {
  return (
    <div className="relative space-y-2">
      <Label htmlFor={id} className="flex items-center gap-2 font-medium">
        {Icon && <Icon className="h-4 w-4" />}
        {label}
      </Label>
      {children}
      {error && (
        <p className="mt-1 text-sm text-destructive">{error.message}</p>
      )}
    </div>
  );
};
