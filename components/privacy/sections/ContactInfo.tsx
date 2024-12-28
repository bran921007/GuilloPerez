"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactInfo() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
      
      <Card>
        <CardContent className="p-6">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <Mail className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">privacy@guillermogaleria.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">+1 (212) 555-0123</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <MapPin className="w-5 h-5 mt-1" />
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-muted-foreground">
                  123 Art District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>

            <div className="pt-6 border-t">
              <p className="mb-4">
                For any privacy-related questions or concerns, please don&apos;t hesitate to contact us.
                We aim to respond to all inquiries within 48 hours.
              </p>
              <Button>Contact Us</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}