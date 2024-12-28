"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DataCollection() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Information We Collect</h2>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Billing and shipping addresses</li>
              <li>Payment information (processed securely through our payment providers)</li>
              <li>Communication preferences</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Information</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>IP address and device information</li>
              <li>Browser type and settings</li>
              <li>Pages viewed and time spent on our website</li>
              <li>Referring websites and search terms</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}