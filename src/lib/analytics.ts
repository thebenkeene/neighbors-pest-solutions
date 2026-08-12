// Lightweight GA4 event helper. Safe to call anywhere client-side —
// no-ops when GA4 isn't configured.
type GtagWindow = Window & {
  gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
};

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;
  if (typeof w.gtag === "function") {
    w.gtag("event", eventName, params);
  }
}
