"use client";

import { Button } from "@/components/ui/button";

export function UserRights() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Your Rights and Choices</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-3">You have the right to:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
            <li>Request data portability</li>
          </ul>
        </div>

        <div className="bg-secondary/50 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-3">Exercise Your Rights</h3>
          <p className="mb-4">
            To exercise any of these rights, please contact our Privacy Team using the contact
            information provided below. We will respond to your request within 30 days.
          </p>
          <Button variant="outline">Contact Privacy Team</Button>
        </div>
      </div>
    </section>
  );
}