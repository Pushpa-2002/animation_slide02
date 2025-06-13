"use client"
import { useEffect, useState } from 'react';

export default function ClientWrapper({ children }) {
  // Safe to use browser APIs here
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return <>{children}</>;
}