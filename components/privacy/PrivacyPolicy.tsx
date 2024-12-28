"use client";

import { Separator } from "@/components/ui/separator";
import { DataCollection } from "./sections/DataCollection";
import { DataUsage } from "./sections/DataUsage";
import { DataSecurity } from "./sections/DataSecurity";
import { UserRights } from "./sections/UserRights";
import { ThirdPartySharing } from "./sections/ThirdPartySharing";
import { CookiePolicy } from "./sections/CookiePolicy";
import { ContactInfo } from "./sections/ContactInfo";

export function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-6">Privacy Policy</h1>
      
      <div className="text-sm text-muted-foreground mb-8">
        Last updated: {new Date().toLocaleDateString()}
        <br />
        Effective date: {new Date().toLocaleDateString()}
      </div>

      <p className="text-lg mb-8">
        At D&apos;Guillermo Galeria, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
        disclose, and safeguard your information when you visit our website or use our services.
      </p>

      <Separator className="my-8" />

      <DataCollection />
      <DataUsage />
      <DataSecurity />
      <UserRights />
      <ThirdPartySharing />
      <CookiePolicy />
      <ContactInfo />
    </div>
  );
}