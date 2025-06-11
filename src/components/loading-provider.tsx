"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { AppLoading, RouteLoading } from "./loading";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

interface LoadingContextType {
  isAppLoading: boolean;
  isRouteLoading: boolean;
  setAppLoading: (loading: boolean) => void;
  setRouteLoading: (loading: boolean) => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}

interface LoadingProviderProps {
  children: React.ReactNode;
}

export function LoadingProvider({ children }: LoadingProviderProps) {
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const pathname = usePathname();

  // Handle initial app loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 1500); // Show loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  // Handle route loading
  useEffect(() => {
    setIsRouteLoading(true);
    const timer = setTimeout(() => {
      setIsRouteLoading(false);
    }, 500); // Show route loading for 0.5 seconds

    return () => clearTimeout(timer);
  }, [pathname]);

  const value = {
    isAppLoading,
    isRouteLoading,
    setAppLoading: setIsAppLoading,
    setRouteLoading: setIsRouteLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      <AnimatePresence mode="wait">
        {isAppLoading && <AppLoading key="app-loading" />}
        {isRouteLoading && !isAppLoading && <RouteLoading key="route-loading" />}
      </AnimatePresence>
      {children}
    </LoadingContext.Provider>
  );
}