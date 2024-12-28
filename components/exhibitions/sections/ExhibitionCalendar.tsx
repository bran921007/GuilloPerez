"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const events = [
  {
    date: new Date(2024, 4, 15),
    title: "Inauguración: Metamorfosis Digital",
    type: "opening"
  },
  {
    date: new Date(2024, 5, 1),
    title: "Visita Guiada con Elena Rodríguez",
    type: "guided-tour"
  },
  {
    date: new Date(2024, 5, 15),
    title: "Taller de Arte Digital",
    type: "workshop"
  },
  {
    date: new Date(2024, 5, 30),
    title: "Clausura: Metamorfosis Digital",
    type: "closing"
  }
];

export function ExhibitionCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const selectedDateEvents = events.filter(
    event => date && event.date.toDateString() === date.toDateString()
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendario de Eventos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
          
          <div>
            <h3 className="text-lg font-medium mb-4">
              Eventos del {date?.toLocaleDateString()}
            </h3>
            {selectedDateEvents.length > 0 ? (
              <div className="space-y-4">
                {selectedDateEvents.map((event, index) => (
                  <div key={index} className="p-4 bg-secondary rounded-lg">
                    <p className="font-medium">{event.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {event.date.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                No hay eventos programados para esta fecha.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}