"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

interface Exhibition {
  title: string;
  openingDate: Date;
  closingDate: Date;
  artists: string;
  type: string;
}

const exhibitions = [
  // Current Exhibition
  {
    title: "OLEAJE - Exposición Colectiva",
    openingDate: new Date(2024, 10, 30),
    closingDate: new Date(2025, 0, 12),
    artists: "12 Artistas Colectivo",
    type: "exhibition"
  },
  // Past Exhibitions
  {
    title: "Centenario Guillo Pérez",
    openingDate: new Date(2023, 11, 29),
    closingDate: new Date(2024, 0, 21),
    artists: "Guillo Pérez",
    type: "exhibition"
  },
  {
    title: "Quinta Temporada de Indómita",
    openingDate: new Date(2023, 7, 15),
    closingDate: new Date(2023, 7, 30), // Assuming a two-week run
    artists: "Colección Homenaje",
    type: "exhibition"
  },
  {
    title: "Feria del Coco 2022",
    openingDate: new Date(2022, 6, 1),
    closingDate: new Date(2022, 6, 7), // Assuming a week-long fair
    artists: "Guillo Pérez",
    type: "exhibition"
  },
  {
    title: "Exhibición Parque de Cabrera",
    openingDate: new Date(2022, 6, 15),
    closingDate: new Date(2022, 6, 22), // Assuming a week-long exhibition
    artists: "Guillo Pérez",
    type: "exhibition"
  }
];

export function ExhibitionCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const getActiveExhibitions = (selectedDate: Date | undefined): Exhibition[] => {
    if (!selectedDate) return [];
    
    return exhibitions.filter(exhibition => {
      const date = selectedDate.getTime();
      const start = exhibition.openingDate.getTime();
      const end = exhibition.closingDate.getTime();
      
      if (date === start) {
        exhibition.type = 'opening';
        return true;
      }
      if (date === end) {
        exhibition.type = 'closing';
        return true;
      }
      if (date > start && date < end) {
        exhibition.type = 'ongoing';
        return true;
      }
      return false;
    });
  };

  const activeExhibitions = getActiveExhibitions(date);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendario de Exposiciones</CardTitle>
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
              {date?.toLocaleDateString('es-DO', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </h3>
            {activeExhibitions.length > 0 ? (
              <div className="space-y-4">
                {activeExhibitions.map((exhibition, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${
                      exhibition.type === 'opening' 
                        ? 'bg-green-100 dark:bg-green-900' 
                        : exhibition.type === 'closing'
                        ? 'bg-red-100 dark:bg-red-900'
                        : 'bg-blue-100 dark:bg-blue-900'
                    }`}
                  >
                    <p className="font-medium">{exhibition.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {exhibition.artists}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {exhibition.type === 'opening' 
                        ? '¡Inauguración!' 
                        : exhibition.type === 'closing'
                        ? 'Último día'
                        : 'En exhibición'}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">
                No hay exposiciones activas en esta fecha.
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}