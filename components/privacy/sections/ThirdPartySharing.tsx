"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function ThirdPartySharing() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Third-Party Data Sharing</h2>
      
      <Alert className="mb-6">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important Notice</AlertTitle>
        <AlertDescription>
          We only share your data with third parties when necessary to provide our services
          or when required by law.
        </AlertDescription>
      </Alert>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Service Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processors</li>
              <li>Shipping and delivery services</li>
              <li>Email marketing platforms</li>
              <li>Analytics services</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Legal Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Court orders and legal processes</li>
              <li>Government requests</li>
              <li>Protection of rights and safety</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}