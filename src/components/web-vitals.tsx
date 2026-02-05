"use client";

import { useReportWebVitals } from "next/web-vitals";

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log to console in development
    if (process.env.NODE_ENV === "development") {
      console.log(metric);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === "production") {
      // You can send to Google Analytics, Vercel Analytics, etc.
      const body = JSON.stringify({
        name: metric.name,
        value: metric.value,
        rating: metric.rating,
        id: metric.id,
      });

      // Example: Send to your analytics endpoint
      if (navigator.sendBeacon) {
        navigator.sendBeacon("/api/analytics", body);
      } else {
        fetch("/api/analytics", {
          body,
          method: "POST",
          keepalive: true,
        });
      }
    }
  });

  return null;
}
