"use client";  // This directive ensures the component runs on the client side

import React, { ReactNode } from "react";  // Grouping imports for clarity
import { Provider } from "react-redux";
import reduxStore from "./store";  // Adjust path based on your folder structure

/**
 * ReduxProvider Component
 * Wraps the application with Redux store using the react-redux Provider.
 */
export default function ReduxProvider({ children }: { children: ReactNode }) {
  return <Provider store={reduxStore}>{children}</Provider>;
}
