"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function DataUsage() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">How We Use Your Information</h2>
      
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Primary Purposes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process your purchases and deliver products</li>
              <li>Send order confirmations and updates</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send newsletters and marketing communications (with your consent)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Service Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-6 space-y-2">
              <li>Analyze website usage and performance</li>
              <li>Improve our products and services</li>
              <li>Personalize your experience</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}