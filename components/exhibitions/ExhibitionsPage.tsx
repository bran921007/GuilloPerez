"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CurrentExhibition } from "./sections/CurrentExhibition";
import { UpcomingExhibitions } from "./sections/UpcomingExhibitions";
import { PastExhibitions } from "./sections/PastExhibitions";
import { ExhibitionCalendar } from "./sections/ExhibitionCalendar";
import { VisitorInfo } from "./sections/VisitorInfo";

export function ExhibitionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-serif mb-4">Exposiciones</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Descubra nuestra cuidadosa selección de exposiciones que celebran 
          la excelencia artística y la innovación creativa.
        </p>
      </div>

      <CurrentExhibition />

      <Tabs defaultValue="past" className="mt-16">
        {/* <TabsList className="grid w-full grid-cols-2 lg:w-[400px] mb-8">
          <TabsTrigger value="upcoming">Próximas</TabsTrigger>
          <TabsTrigger value="past">Pasadas</TabsTrigger>
        </TabsList> */}
        
        {/* <TabsContent value="upcoming">
          <h1 className="text-center text-2xl font-serif mb-12">Próximas Exposiciones</h1>
          <UpcomingExhibitions />
        </TabsContent> */}
        
        <TabsContent value="past">
          <h1 className="text-center text-2xl font-serif mb-12">Exposiciones Pasadas</h1>
          <PastExhibitions />
        </TabsContent>
      </Tabs>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
        <div className="lg:col-span-2">
          <ExhibitionCalendar />
        </div>
        <div>
          <VisitorInfo />
        </div>
      </div>
    </div>
  );
}