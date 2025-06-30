"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DateTimePickerProps {
  value?: string; // ISO datetime string
  onChange: (value: string) => void;
  className?: string;
}

export function DateTimePicker({
  value,
  onChange,
  className,
}: DateTimePickerProps) {
  // Parse the initial value
  const initialDate = value ? new Date(value) : undefined;

  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    initialDate
  );
  const [startTime, setStartTime] = React.useState<string>(
    initialDate
      ? `${initialDate.getHours().toString().padStart(2, "0")}:${initialDate
          .getMinutes()
          .toString()
          .padStart(2, "0")}:00`
      : "10:30:00"
  );
  // Update the form value when date or time changes
  React.useEffect(() => {
    if (selectedDate && startTime) {
      const [hours, minutes] = startTime.split(":").map(Number);
      const combinedDateTime = new Date(selectedDate);
      combinedDateTime.setHours(hours, minutes, 0, 0);

      // Convert to ISO string format for timestamptz
      const isoString = combinedDateTime.toISOString();
      onChange(isoString);
    }
  }, [selectedDate, startTime, onChange]);

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handleStartTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartTime(e.target.value);
  };

  return (
    <Card className={`w-fit py-4 ${className}`}>
      <CardContent className="px-4">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={handleDateSelect}
          className="bg-accent p-0 [--cell-size:--spacing(10.5)]"
          disabled={(date) => date < new Date()}
        />
      </CardContent>
      <CardFooter className="flex justify-center border-t px-4 !pt-4">
        <div className="w-full max-w-xs">
          <Label
            htmlFor="appointment-time"
            className="text-sm font-medium mb-2 block"
          >
            Appointment Time
          </Label>
          <Input
            id="appointment-time"
            type="time"
            step="60"
            value={startTime}
            onChange={handleStartTimeChange}
            className="w-full"
            inputMode="numeric"
            pattern="[0-9]{2}:[0-9]{2}"
            title="24-hour format (HH:MM)"
          />
          <p className="text-xs text-muted-foreground mt-1">
            Eg: 10:30 (24-hour format)
          </p>
        </div>
      </CardFooter>
    </Card>
  );
}
