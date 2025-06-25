"use client";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
    plausible: (event: string, options?: any) => void;
  }
}

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";
import dynamic from "next/dynamic";

export function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && window.gtag) {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      });
    }
  }, [pathname, GA_MEASUREMENT_ID]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
    </>
  );
}

// Enhanced Analytics with multiple providers
interface AnalyticsProps {
  googleAnalyticsId?: string;
  plausibleDomain?: string;
}

export function Analytics({
  googleAnalyticsId,
  plausibleDomain,
}: AnalyticsProps) {
  const pathname = usePathname();

  // Track page views
  useEffect(() => {
    if (googleAnalyticsId && window.gtag) {
      window.gtag("config", googleAnalyticsId, {
        page_path: pathname,
      });
    }

    if (plausibleDomain && window.plausible) {
      window.plausible("pageview");
    }
  }, [pathname, googleAnalyticsId, plausibleDomain]);

  // Track user interactions
  useEffect(() => {
    if (typeof window === "undefined") return;

    const trackEvent = (
      eventName: string,
      properties?: Record<string, any>
    ) => {
      if (googleAnalyticsId && window.gtag) {
        window.gtag("event", eventName, properties);
      }

      if (plausibleDomain && window.plausible) {
        window.plausible(eventName, { props: properties });
      }
    };

    const handleProjectClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const projectCard = target.closest("[data-project-title]");
      if (projectCard) {
        const projectTitle = projectCard.getAttribute("data-project-title");
        trackEvent("project_view", { project_title: projectTitle });
      }
    };

    const handleContactClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const contactLink = target.closest(
        'a[href^="mailto:"], a[href*="github.com"], a[href*="twitter.com"], a[href*="linkedin.com"]'
      );
      if (contactLink) {
        const href = (contactLink as HTMLAnchorElement).href;
        let platform = "unknown";
        if (href.includes("mailto:")) platform = "email";
        else if (href.includes("github.com")) platform = "github";
        else if (href.includes("twitter.com")) platform = "twitter";
        else if (href.includes("linkedin.com")) platform = "linkedin";

        trackEvent("contact_click", { platform });
      }
    };

    const handleResumeDownload = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a[href*=".pdf"]') ||
        target.textContent?.toLowerCase().includes("resume")
      ) {
        trackEvent("resume_download");
      }
    };

    const handleScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );
      if (scrollPercent >= 25 && !sessionStorage.getItem("scroll_25")) {
        sessionStorage.setItem("scroll_25", "true");
        trackEvent("scroll_depth", { percent: 25 });
      }
      if (scrollPercent >= 50 && !sessionStorage.getItem("scroll_50")) {
        sessionStorage.setItem("scroll_50", "true");
        trackEvent("scroll_depth", { percent: 50 });
      }
      if (scrollPercent >= 75 && !sessionStorage.getItem("scroll_75")) {
        sessionStorage.setItem("scroll_75", "true");
        trackEvent("scroll_depth", { percent: 75 });
      }
      if (scrollPercent >= 90 && !sessionStorage.getItem("scroll_90")) {
        sessionStorage.setItem("scroll_90", "true");
        trackEvent("scroll_depth", { percent: 90 });
      }
    };

    // Track time on page
    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent("time_on_page", { seconds: timeOnPage });
    };

    document.addEventListener("click", handleProjectClick);
    document.addEventListener("click", handleContactClick);
    document.addEventListener("click", handleResumeDownload);
    window.addEventListener("scroll", handleScrollDepth);
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      document.removeEventListener("click", handleProjectClick);
      document.removeEventListener("click", handleContactClick);
      document.removeEventListener("click", handleResumeDownload);
      window.removeEventListener("scroll", handleScrollDepth);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [googleAnalyticsId, plausibleDomain]);

  return (
    <>
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics-enhanced" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {/* Plausible Analytics */}
      {plausibleDomain && (
        <Script
          defer
          data-domain={plausibleDomain}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

// Hook for tracking custom events
export function useAnalytics() {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if (window.gtag) {
        window.gtag("event", eventName, properties);
      }

      // Plausible
      if (window.plausible) {
        window.plausible(eventName, { props: properties });
      }
    }
  };

  return { trackEvent };
}
