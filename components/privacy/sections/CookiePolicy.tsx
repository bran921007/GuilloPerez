"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function CookiePolicy() {
  const cookies = [
    {
      type: "Essential",
      purpose: "Website functionality and security",
      duration: "Session - 1 year",
      required: "Yes"
    },
    {
      type: "Analytics",
      purpose: "Understanding user behavior",
      duration: "2 years",
      required: "Optional"
    },
    {
      type: "Marketing",
      purpose: "Personalized advertising",
      duration: "1 year",
      required: "Optional"
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Cookie Policy</h2>
      
      <p className="mb-6">
        We use cookies and similar tracking technologies to improve your browsing experience,
        analyze site traffic, and understand where our audience is coming from.
      </p>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Cookie Type</TableHead>
            <TableHead>Purpose</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Required</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {cookies.map((cookie, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{cookie.type}</TableCell>
              <TableCell>{cookie.purpose}</TableCell>
              <TableCell>{cookie.duration}</TableCell>
              <TableCell>{cookie.required}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}