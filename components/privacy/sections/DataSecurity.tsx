"use client";

import { Shield, Lock, Server } from "lucide-react";

export function DataSecurity() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6">Data Security Measures</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-secondary/50 rounded-lg">
          <Shield className="w-8 h-8 mb-4" />
          <h3 className="text-lg font-medium mb-2">Encryption</h3>
          <p className="text-muted-foreground">
            All sensitive data is encrypted using industry-standard SSL/TLS protocols during transmission.
          </p>
        </div>

        <div className="p-6 bg-secondary/50 rounded-lg">
          <Lock className="w-8 h-8 mb-4" />
          <h3 className="text-lg font-medium mb-2">Access Control</h3>
          <p className="text-muted-foreground">
            Strict access controls and authentication measures protect your data from unauthorized access.
          </p>
        </div>

        <div className="p-6 bg-secondary/50 rounded-lg">
          <Server className="w-8 h-8 mb-4" />
          <h3 className="text-lg font-medium mb-2">Secure Storage</h3>
          <p className="text-muted-foreground">
            Data is stored in secure, monitored facilities with regular security audits and updates.
          </p>
        </div>
      </div>
    </section>
  );
}